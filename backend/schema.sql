CREATE DATABASE IF NOT EXISTS campus_crud;
USE campus_crud;

CREATE TABLE IF NOT EXISTS portfolio (
    id INT PRIMARY KEY AUTO_INCREMENT,
    owner_name VARCHAR(120) NOT NULL,
    email VARCHAR(150) NOT NULL,
    profession VARCHAR(100) NOT NULL,
    skills VARCHAR(255) NOT NULL,
    bio TEXT,
    website_url VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO portfolio (owner_name, email, profession, skills, bio, website_url) VALUES
('Reuben Kambowa Luneta', 'reubenluneta14@gmail.com', 'Full Stack Developer', 'JavaScript, Node.js, React, MongoDB', 'Passionate about web technologies and building scalable applications. Team leader with strong organizational skills.', 'https://github.com/reubenk'),
('Frazer Musonda', 'musondafrazer8@gmail.com', 'Backend Developer', 'Java, Spring Boot, MySQL, Python', 'Expert in server-side development and database design. Strong problem-solving abilities.', 'https://github.com/frazerm'),
('Emmanuel Kweche Ngosa', 'bwalyaemmanuelkasongo@gmail.com', 'Data Scientist', 'Python, R, SQL, Machine Learning', 'Data enthusiast with strong analytical skills and statistical knowledge.', 'https://github.com/emmanueln'),
('Bwalya Kasongo', 'bwalyaemmanuelkasongo@gmail.com', 'Frontend Developer', 'HTML5, CSS3, JavaScript, React', 'Creating beautiful and responsive user interfaces with attention to detail.', 'https://github.com/bwaliyak'),
('Mugaba Banda', 'mugaba.banda@email.com', 'Mobile Developer', 'React Native, Flutter, Firebase', 'Building cross-platform mobile applications with excellent user experience.', 'https://github.com/mugabab'),
('Temwani Zulu', 'temwani.johnzulu@gmail.com', 'DevOps Engineer', 'Docker, AWS, CI/CD, Linux', 'Infrastructure and deployment specialist ensuring smooth operations.', 'https://github.com/temwani'),
('Mwila Singoma', 'mwilasingoma@gmail.com', 'UI/UX Designer', 'Figma, Adobe XD, User Research', 'Creating user-centered design solutions that are both beautiful and functional.', 'https://github.com/mwilas'),
('Sostern Hamulambo Mwenda', 'sosternhamulambomwenda@gmail.com', 'Database Administrator', 'MySQL, PostgreSQL, MongoDB', 'Database optimization and management expert ensuring data integrity.', 'https://github.com/sosternm'),
('Maluba Mulongo', 'mulongomaluba@gmail.com', 'Software Engineer', 'Java, Python, C++, Algorithms', 'Strong problem-solving and coding skills with attention to efficiency.', 'https://github.com/malubam'),
('Chimwemwe Judah Ponya', 'chimwemweponya@gmail.com', 'Web Developer', 'PHP, Laravel, JavaScript, Vue.js', 'Full-stack web development specialist creating robust web applications.', 'https://github.com/chimwemwep'),
('Chulu Eustane', 'chulueustane04@gmail.com', 'System Analyst', 'System Design, UML, Requirements', 'Analyzing and designing software systems to meet business needs.', 'https://github.com/chulue'),
('Mainza Muya', 'mainzamuya@gmail.com', 'Network Engineer', 'Cisco, TCP/IP, Network Security', 'Network infrastructure and security expert ensuring secure communications.', 'https://github.com/mainzam'),
('Kapunza Gwenani', 'kapunzagwenani@icloud.com', 'Cyber Security Specialist', 'Ethical Hacking, Penetration Testing, Security', 'Keeping systems secure from threats and vulnerabilities.', 'https://github.com/kapunzag');