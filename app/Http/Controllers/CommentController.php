<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Comment;
use App\Post;

class CommentController extends Controller
{

    public function index()
    {

$comments = Comment::all();
return response()->json($comments);
    }


    public function create()
    {
       
    }

    public function store(Request $request)
    {
    $comment=  Comment::create($request->all());
 
    }
    public function show($id)
    {
        
    }

    public function edit($id)
    {

    }

    public function update($id)
    {

    }

    public function destroy($id)
    {
       
    }



}
