export const languages = {
  vi: 'Tiếng Việt',
  en: 'English',
} as const;

export const defaultLang = 'vi';
export type Lang = keyof typeof languages;

// UI strings (navigation, buttons, labels, section intros)
export const ui = {
  vi: {
    'nav.home': 'Trang chủ',
    'nav.services': 'Dịch vụ',
    'nav.solutions': 'Giải pháp',
    'nav.about': 'Giới thiệu',
    'nav.news': 'Tin tức',
    'nav.careers': 'Tuyển dụng',
    'nav.contact': 'Liên hệ',

    'cta.contact': 'Liên hệ tư vấn',
    'cta.explore': 'Khám phá dịch vụ',
    'cta.learnMore': 'Tìm hiểu thêm',
    'cta.getQuote': 'Nhận báo giá',
    'cta.support': 'Tạo yêu cầu hỗ trợ',
    'cta.apply': 'Ứng tuyển ngay',
    'cta.allServices': 'Xem tất cả dịch vụ',
    'cta.allSolutions': 'Xem tất cả giải pháp',
    'cta.viewMore': 'Xem thêm',

    'tag.brand': 'An ninh của bạn — Trách nhiệm của chúng tôi',

    'cta.discover': 'Khám phá ngay',
    'cta.getStarted': 'Bắt đầu ngay',
    'cta.subscribe': 'Đăng ký',

    'divider.fullscale': 'Bảo vệ toàn diện trước mọi mối đe dọa mạng',
    'divider.fullscale.sub': 'Vượt trội hơn các giải pháp thông thường, CMC mang đến lớp phòng thủ đa tầng — bảo vệ toàn bộ hệ thống số của bạn trước hiểm họa mới nhất.',

    'section.devices.eyebrow': 'Năng lực',
    'section.devices.title': 'Năng lực của CMC Cyber Security',
    'section.devices.sub': 'Năng lực được công nhận bởi các tổ chức uy tín trong và ngoài nước.',
    'section.devices.badge': 'Năm kinh nghiệm',

    'section.activity.eyebrow': 'Giải pháp & Dịch vụ',
    'section.activity.title': 'Giải pháp & Dịch vụ toàn diện',
    'section.activity.sub': 'Bao phủ trọn vòng đời an toàn thông tin cho hệ thống của tổ chức, doanh nghiệp.',

    'section.data.title': 'Quyền riêng tư dữ liệu là quyền cơ bản — và nó thuộc về bạn',
    'section.data.sub': 'Chúng tôi tin rằng mọi tổ chức đều xứng đáng được kiểm soát thông tin của mình. CMC giúp bạn làm chủ dữ liệu với công nghệ mã hóa và giám sát tiên tiến.',

    'section.assets.eyebrow': 'Chăm sóc khách hàng',
    'section.assets.title': 'Dịch vụ chăm sóc khách hàng chuyên biệt',
    'section.assets.sub': 'Phương châm phục vụ của CMC Cyber Security: Chuyên nghiệp — Nhanh chóng — Cam kết — Sáng tạo.',

    'section.stats.title': 'Giám sát an ninh & phòng chống mã độc cho doanh nghiệp',
    'section.stats.sub': 'Theo dõi mối đe dọa, bảo vệ hệ thống — năng lực an ninh chuyên biệt cho hệ thống doanh nghiệp.',

    'section.trust.title': 'Bảo vệ bạn khỏi hiểm họa không gian mạng',
    'section.trust.sub': 'Triển khai chỉ trong vài phút, tận hưởng sự an tâm lâu dài.',

    'section.testimonials.eyebrow': 'Ghi nhận & Giải thưởng',
    'section.testimonials.title': 'Chất lượng sản phẩm được công nhận',

    'section.support.title': 'Hỗ trợ khách hàng',
    'section.support.sub': 'Chúng tôi luôn sẵn sàng. Liên hệ, tạo yêu cầu hỗ trợ hoặc tra cứu chứng chỉ PCI-DSS.',

    'newsletter.title': 'Bản tin an ninh mạng',
    'newsletter.sub': 'Đăng ký nhận cập nhật, tin tức, góc nhìn và chương trình ưu đãi mới nhất từ CMC.',
    'newsletter.placeholder': 'Nhập email của bạn',

    'footer.support': 'Hỗ trợ',

    'hero.badge': 'Thành viên Tập đoàn Công nghệ CMC',
    'hero.title': 'Bảo vệ toàn diện cho hệ thống thông tin doanh nghiệp',
    'hero.subtitle':
      'Là thành viên Tập đoàn Công nghệ CMC, chúng tôi cung cấp dịch vụ và giải pháp an ninh, an toàn thông tin cho hệ thống của tổ chức, doanh nghiệp.',
    'hero.stat1': 'Năm kinh nghiệm',
    'hero.stat2': 'Chứng chỉ chuyên gia',
    'hero.stat3': 'Lần đạt chuẩn VB100',
    'hero.stat4': 'Giám sát vận hành',

    'section.services.eyebrow': 'Dịch vụ',
    'section.services.title': 'Dịch vụ & giải pháp nổi bật',
    'section.services.sub': 'Bao phủ trọn vòng đời an toàn thông tin: tư vấn tuân thủ, đánh giá, kiểm thử và vận hành.',

    'section.solutions.eyebrow': 'Giải pháp',
    'section.solutions.title': 'Sản phẩm & giải pháp bảo mật',
    'section.solutions.sub': 'Các sản phẩm Make-in-Vietnam đạt chuẩn quốc tế, sẵn sàng triển khai cho doanh nghiệp.',

    'section.why.eyebrow': 'Vì sao chọn CMC',
    'section.why.title': 'Đối tác an ninh mạng đáng tin cậy',
    'section.why.sub': 'Năng lực được công nhận bởi các tổ chức uy tín trong và ngoài nước.',

    'section.certs.eyebrow': 'Chứng nhận & Tiêu chuẩn',
    'section.certs.title': 'Đạt chuẩn quốc tế',
    'section.certs.sub': 'Đội ngũ chuyên gia sở hữu các chứng chỉ hàng đầu thế giới về an ninh mạng.',

    'section.clients.eyebrow': 'Khách hàng tiêu biểu',
    'section.clients.title': 'Được tin tưởng bởi các tổ chức hàng đầu',

    'section.process.eyebrow': 'Quy trình',
    'section.process.title': 'Cách chúng tôi đồng hành cùng bạn',
    'section.process.sub': 'Một lộ trình minh bạch, từ đánh giá đến vận hành liên tục.',

    'section.cta.title': 'Sẵn sàng nâng tầm an ninh mạng cho tổ chức của bạn?',
    'section.cta.sub': 'Đội ngũ chuyên gia CMC Cyber Security luôn sẵn sàng tư vấn giải pháp phù hợp nhất.',

    'contact.title': 'Liên hệ với chúng tôi',
    'contact.sub': 'Để lại thông tin, đội ngũ tư vấn sẽ liên hệ trong vòng 24 giờ làm việc.',
    'contact.name': 'Họ và tên',
    'contact.email': 'Email công việc',
    'contact.phone': 'Số điện thoại',
    'contact.company': 'Tên tổ chức / công ty',
    'contact.message': 'Nội dung cần tư vấn',
    'contact.send': 'Gửi yêu cầu',
    'contact.office': 'Văn phòng',
    'contact.hotline': 'Tổng đài',
    'contact.required': 'Bắt buộc',
    'contact.success': 'Cảm ơn bạn! Yêu cầu đã được ghi nhận (demo). Chúng tôi sẽ phản hồi sớm.',

    'about.title': 'Về CMC Cyber Security',
    'about.lead':
      'CMC Cyber Security là đơn vị thành viên của Tập đoàn Công nghệ CMC, tiên phong cung cấp dịch vụ và giải pháp an ninh mạng toàn diện cho các tổ chức, doanh nghiệp tại Việt Nam và khu vực.',
    'about.missionTitle': 'Sứ mệnh',
    'about.mission': 'Kiến tạo không gian số an toàn, bảo vệ tài sản thông tin và sự phát triển bền vững của khách hàng.',
    'about.visionTitle': 'Tầm nhìn',
    'about.vision': 'Trở thành doanh nghiệp an ninh mạng hàng đầu Việt Nam, vươn tầm khu vực châu Á.',
    'about.valuesTitle': 'Giá trị cốt lõi',

    'news.title': 'Tin tức & Sự kiện',
    'news.sub': 'Cập nhật xu hướng an ninh mạng, cảnh báo lỗ hổng và hoạt động của CMC.',
    'news.readMore': 'Đọc tiếp',

    'careers.title': 'Gia nhập đội ngũ CMC Cyber Security',
    'careers.sub': 'Cùng kiến tạo lá chắn số cho hàng nghìn doanh nghiệp. Khám phá các vị trí đang tuyển.',
    'careers.openings': 'Vị trí đang tuyển',
    'careers.location': 'Địa điểm',
    'careers.type': 'Hình thức',

    'footer.tagline': 'An ninh của bạn — Trách nhiệm của chúng tôi.',
    'footer.services': 'Dịch vụ',
    'footer.company': 'Công ty',
    'footer.contact': 'Liên hệ',
    'footer.rights': 'Bản quyền thuộc về CMC Cyber Security. Bảo lưu mọi quyền.',
    'footer.note': 'Website demo dựng lại với mục đích minh hoạ thiết kế — không phải trang chính thức.',
  },

  en: {
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.solutions': 'Solutions',
    'nav.about': 'About',
    'nav.news': 'News',
    'nav.careers': 'Careers',
    'nav.contact': 'Contact',

    'cta.contact': 'Talk to an expert',
    'cta.explore': 'Explore services',
    'cta.learnMore': 'Learn more',
    'cta.getQuote': 'Get a quote',
    'cta.support': 'Create support request',
    'cta.apply': 'Apply now',
    'cta.allServices': 'View all services',
    'cta.allSolutions': 'View all solutions',
    'cta.viewMore': 'View more',

    'tag.brand': 'Your Security — Our Responsibility',

    'cta.discover': 'Discover more',
    'cta.getStarted': 'Get started',
    'cta.subscribe': 'Subscribe',

    'divider.fullscale': 'Full-scale protection from cyberthreats',
    'divider.fullscale.sub': 'Outperforming conventional defenses, CMC delivers comprehensive, multi-layered protection — securing your entire digital landscape against the latest threats.',

    'section.devices.eyebrow': 'Capabilities',
    'section.devices.title': 'The capabilities of CMC Cyber Security',
    'section.devices.sub': 'Capabilities recognized by leading organizations at home and abroad.',
    'section.devices.badge': 'Years of experience',

    'section.activity.eyebrow': 'Solutions & Services',
    'section.activity.title': 'End-to-end solutions & services',
    'section.activity.sub': 'Covering the full information-security lifecycle for organizations and enterprises.',

    'section.data.title': 'Data privacy is a human right — and it belongs to you',
    'section.data.sub': 'We believe every organization deserves control over its information. CMC puts you back in charge of your data with advanced encryption and monitoring.',

    'section.assets.eyebrow': 'Customer care',
    'section.assets.title': 'Dedicated customer care',
    'section.assets.sub': 'Our service ethos at CMC Cyber Security: Professional — Fast — Committed — Innovative.',

    'section.stats.title': 'Security monitoring and malware protection for businesses',
    'section.stats.sub': 'Monitor threats, protect systems — security capabilities purpose-built for enterprise systems.',

    'section.trust.title': 'Protecting you from the dangers of cyberspace',
    'section.trust.sub': 'Set up in minutes, enjoy lasting peace of mind.',

    'section.testimonials.eyebrow': 'Recognition & Awards',
    'section.testimonials.title': 'Recognized product quality',

    'section.support.title': 'Customer support',
    'section.support.sub': 'We are here for you. Get in touch, open a support request or verify a PCI-DSS certificate.',

    'newsletter.title': 'Cybersecurity newsletter',
    'newsletter.sub': 'Subscribe for the latest updates, news, insights and promotions from CMC.',
    'newsletter.placeholder': 'Enter your email',

    'footer.support': 'Support',

    'hero.badge': 'A member of CMC Technology Group',
    'hero.title': 'End-to-end protection for enterprise information systems',
    'hero.subtitle':
      'A member of CMC Technology Group, we deliver information-security services and solutions for organizations and enterprises.',
    'hero.stat1': 'Years of experience',
    'hero.stat2': 'Expert certifications',
    'hero.stat3': 'VB100 perfect scores',
    'hero.stat4': 'Security monitoring',

    'section.services.eyebrow': 'Services',
    'section.services.title': 'Featured services & solutions',
    'section.services.sub': 'Covering the full security lifecycle: compliance consulting, assessment, testing and operations.',

    'section.solutions.eyebrow': 'Solutions',
    'section.solutions.title': 'Security products & solutions',
    'section.solutions.sub': 'Make-in-Vietnam products built to international standards, ready to deploy for enterprises.',

    'section.why.eyebrow': 'Why CMC',
    'section.why.title': 'A cybersecurity partner you can trust',
    'section.why.sub': 'Capabilities recognized by leading organizations at home and abroad.',

    'section.certs.eyebrow': 'Certifications & Standards',
    'section.certs.title': 'Built to international standards',
    'section.certs.sub': 'Our experts hold the world’s most respected cybersecurity certifications.',

    'section.clients.eyebrow': 'Selected clients',
    'section.clients.title': 'Trusted by leading organizations',

    'section.process.eyebrow': 'Process',
    'section.process.title': 'How we work with you',
    'section.process.sub': 'A transparent journey, from assessment to continuous operations.',

    'section.cta.title': 'Ready to elevate your organization’s cybersecurity?',
    'section.cta.sub': 'The CMC Cyber Security team is ready to advise the solution that fits you best.',

    'contact.title': 'Get in touch',
    'contact.sub': 'Leave your details and our consultants will reach out within one business day.',
    'contact.name': 'Full name',
    'contact.email': 'Work email',
    'contact.phone': 'Phone number',
    'contact.company': 'Organization / company',
    'contact.message': 'How can we help?',
    'contact.send': 'Send request',
    'contact.office': 'Office',
    'contact.hotline': 'Hotline',
    'contact.required': 'Required',
    'contact.success': 'Thank you! Your request has been recorded (demo). We will respond shortly.',

    'about.title': 'About CMC Cyber Security',
    'about.lead':
      'CMC Cyber Security, a member of CMC Technology Group, is a pioneer in delivering end-to-end cybersecurity services and solutions for organizations and enterprises across Vietnam and the region.',
    'about.missionTitle': 'Mission',
    'about.mission': 'To build a safe digital space and protect the information assets and sustainable growth of our customers.',
    'about.visionTitle': 'Vision',
    'about.vision': 'To become the leading cybersecurity enterprise in Vietnam, reaching across the Asian region.',
    'about.valuesTitle': 'Core values',

    'news.title': 'News & Events',
    'news.sub': 'Cybersecurity trends, vulnerability alerts and CMC activities.',
    'news.readMore': 'Read more',

    'careers.title': 'Join the CMC Cyber Security team',
    'careers.sub': 'Help build the digital shield for thousands of enterprises. Explore our open roles.',
    'careers.openings': 'Open positions',
    'careers.location': 'Location',
    'careers.type': 'Type',

    'footer.tagline': 'Your Security — Our Responsibility.',
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.contact': 'Contact',
    'footer.rights': 'CMC Cyber Security. All rights reserved.',
    'footer.note': 'Demo rebuild for design demonstration only — not the official site.',
  },
} as const;

export type UIKey = keyof (typeof ui)['vi'];
