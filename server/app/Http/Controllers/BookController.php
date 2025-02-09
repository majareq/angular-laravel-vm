<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Models\Book;

class BookController extends Controller
{
    public function index() {
        return Book::all();
    }

    public function show($id) {
        return Book::find($id);
    }

    public function store(Request $request){
        return Book::create($request->all());
    }

    public function update(Request $request, $id) {
        $book = Book::findOrFail($id);
        $book->update($request->all());
        
        return $book;
    }

    public function delete(Request $request, $id) {
        $book = Book::findOrFail($id);
        $book->delete();
        
        return 204;
    }
}
