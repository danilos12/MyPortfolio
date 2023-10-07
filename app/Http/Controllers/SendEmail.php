<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactForm;

class SendEmail extends Controller
{
    public function sendMail(Request $request){

     

       $data = $request->all();
            try{
                config(['mail.from.name' => $data['names']]);
                Mail::to('andredandayaganon@gmail.com')->send(new ContactForm( $data));

                return response()->json([
                    'Name'=>$data['names'],
                    'Email'=>$data['emails'],
                    'Message'=>$data['messages'],

                    'messgae'=>'Succeess']);
            }
            catch(Exception $th){
                return response()->json(['messgae'=>'Failed']);
            }







    }
}
