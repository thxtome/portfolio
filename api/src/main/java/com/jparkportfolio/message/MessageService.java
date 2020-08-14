package com.jparkportfolio.message;

import javax.mail.MessagingException;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jparkportfolio.common.ResponseResult;
import com.jparkportfolio.util.MailUtil;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class MessageService {
	private final MessageRepository mr;
	private final MailUtil mu;
	
	public ResponseResult sendMessage(Message message) throws MessagingException {
		mu.sendMail(message);
		mr.save(message);
		return new ResponseResult(HttpStatus.OK, "sending message is success");
	}
}
