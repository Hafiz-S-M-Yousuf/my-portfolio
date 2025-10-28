import React from "react";
import {
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaTelegram,
  FaTiktok,
  FaPinterest
} from "react-icons/fa";

function Social() {
  return (
    <div>
      <a className="icons1" href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      <a className="icons2"href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
      <a className="icons3"href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
      <a className="icons4"href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
      <a className="icons5"href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      <a className="icons6"href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      <a className="icons7"href="https://wa.me" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
      <a className="icons8"href="https://telegram.org" target="_blank" rel="noopener noreferrer"><FaTelegram /></a>
      <a className="icons9"href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
      <a className="icons10"href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer"><FaPinterest /></a>
    </div>
  );
}

export default Social;
