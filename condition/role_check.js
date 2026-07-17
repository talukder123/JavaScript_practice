/*
 *Build a simple login + role-check system that verifies username/password and shows a different message based on admin/user role 
 */

 let user_name = 'ad_min';
 let pass = 123;

 (user_name === 'ad_min') && (pass === 123) ? console.log("Welcome, Admin") : console.log("Wellcome user");