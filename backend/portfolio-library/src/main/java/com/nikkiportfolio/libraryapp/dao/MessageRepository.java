package com.nikkiportfolio.libraryapp.dao;


import com.nikkiportfolio.libraryapp.entity.Message;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepository extends JpaRepository<Message, Long> {

}
