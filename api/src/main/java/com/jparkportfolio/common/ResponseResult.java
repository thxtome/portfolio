package com.jparkportfolio.common;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;

import lombok.Data;

@Data
public class ResponseResult {
	private static final String DEFAULT_KEY = "result";
	private int code;
	private boolean status;
	private String message;
	private LocalDateTime timestamp;
	private Map<String, Object> data;
	private ErrorResult error;
	
	public ResponseResult() {}

	public ResponseResult(HttpStatus status) {
		this.data = new HashMap<>();
		this.code = status.value();
		this.status = (error == null) ? false : true;
		this.message = status.getReasonPhrase();
		this.timestamp = LocalDateTime.now();
	}
	
	public ResponseResult(HttpStatus status, ErrorResult error) {
		this(status);
		this.error = error;
	}
	
	public ResponseResult(HttpStatus status,String message) {
		this(status);
		this.message = message;
	}

	public ResponseResult(HttpStatus status, Object result) {
		this(status);
		this.data.put(DEFAULT_KEY, result);
	}
	
	public ResponseResult(HttpStatus status, Object result, String key) {
		this(status);
		this.data.put(key, result);
	}

	public void add(String key, Object result) {
		this.data.put(key, result);
	}

	public void remove(String key) {
		this.data.remove(key);
	}
}
