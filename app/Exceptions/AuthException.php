<?php

namespace App\Exceptions;

use Exception;

class AuthException extends Exception
{
  public function __construct($message = 'Invalid credentials.', $guards = null, $redirectTo = null)
  {
    parent::__construct($message, $guards, $redirectTo);
  }
}
