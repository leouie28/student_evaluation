<?php

    function uploadImage($file, $path){
        $image = $file;
        $ext = explode(';', $image);
        $ext = explode('/', $ext[0]);
        $imageName = date("YmdHis") . '.' . $ext[1];
        list($type, $image) = explode(';', $image);
        list(, $image)      = explode(',', $image);
        $data = base64_decode($image);

        if(!is_dir($path)){
            mkdir($path, 0777, true);
        }

        file_put_contents(public_path() . '/' . $path . $imageName, $data);

        return $imageName;
    }

    function generateRandomString($length = 5) {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }

    function genareteNumbers($length) {
        $characters = '0123456789';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }
?>