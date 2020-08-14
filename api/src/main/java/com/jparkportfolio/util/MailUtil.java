package com.jparkportfolio.util;

import java.util.Date;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

@Component
public class MailUtil {
	@Autowired
	JavaMailSender javaMailSender;

	// 그냥 텍스트 메일
	public void sendMail(com.jparkportfolio.message.Message sendMessage) throws MessagingException {
		MimeMessage message = javaMailSender.createMimeMessage();
		message.setSubject("포트폴리오 메세지");
		message.setRecipient(Message.RecipientType.TO, new InternetAddress("thxtome531@gmail.com"));
		message.setText(String.format(" 발신인 : %s \n\r 이메일 : %s \n\r 번호 : %s \n\r 내용 : %s \n\r", sendMessage.getSenderName(),
				sendMessage.getSenderEmail(), sendMessage.getSenderPnum(), sendMessage.getContent()));
		message.setSentDate(new Date());
		javaMailSender.send(message);
	}

}
