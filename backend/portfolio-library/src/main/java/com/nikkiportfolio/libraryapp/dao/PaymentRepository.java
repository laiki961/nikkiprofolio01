package com.nikkiportfolio.libraryapp.dao;

import com.nikkiportfolio.libraryapp.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentRepository extends JpaRepository<Payment, Long> {

    Payment findByUserEmail(String userEmail);
}
