package com.jparkportfolio.message;

import javax.mail.MessagingException;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.jparkportfolio.common.ResponseResult;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class MessageController {
	
	private final MessageService ms;
	
	@PostMapping("message")
	public ResponseResult sendMessage(@RequestBody Message message) throws MessagingException {
		return ms.sendMessage(message);
	}
}
