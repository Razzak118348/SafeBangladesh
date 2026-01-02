const SafeBangladeshMap = () => {
  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-md">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d299!2d88.729172!3d25.7600048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4a984c775aba5%3A0xb051700447c40b6b!2sSAFE%20Bangladesh!5e0!3m2!1sen!2sbd!4v1736360000000"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="SAFE Bangladesh Location"
      ></iframe>
    </div>
  );
};

export default SafeBangladeshMap;
