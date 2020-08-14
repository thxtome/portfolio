package com.jparkportfolio.message;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.time.LocalDateTime;

import javax.mail.MessagingException;
import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.jparkportfolio.common.ResponseResult;
import com.jparkportfolio.util.MailUtil;

@SpringBootTest
@Transactional
class MessageServiceTest {
	
	@Autowired MessageService messageService;
	@Autowired MessageRepository messageRepository;
	@Autowired EntityManager em;
	@Test
	void 메세지전송() throws MessagingException {
		//given
		Message message = new Message();
		message.setSenderEmail("thxtome531@gmail.com");
		message.setSenderName("박종훈");
		message.setSenderPnum("010-0000-0000");
		message.setContent("test");
		message.setSendDate(LocalDateTime.now());
		
		//when
		messageService.sendMessage(message);
		
		//then
		assertEquals(message, messageRepository.findOne(message.getId()));
	}

}
