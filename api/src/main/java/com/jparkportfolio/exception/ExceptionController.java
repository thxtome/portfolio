package com.jparkportfolio.exception;

import javax.mail.MessagingException;
import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.jparkportfolio.common.ErrorResult;
import com.jparkportfolio.common.ResponseResult;

@RestController
@ControllerAdvice
public class ExceptionController {
    @ExceptionHandler(MessagingException.class)
    @ResponseStatus(value=HttpStatus.BAD_REQUEST)
	public ResponseResult MessagingException(HttpServletRequest req, Exception e) {
    	ErrorResult er = new ErrorResult(e.getMessage(), req.getRequestURI());
		ResponseResult rr = new ResponseResult(HttpStatus.INTERNAL_SERVER_ERROR, er); 
		return rr;
	}
}
 