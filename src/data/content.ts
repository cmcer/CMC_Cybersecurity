import type { Lang } from '../i18n/ui';

/**
 * Nội dung bám sát cmccybersecurity.com (biên tập ngắn gọn cho bản demo).
 * Tên dịch vụ/giải pháp, năng lực, giải thưởng, tin tức lấy từ trang gốc.
 */

type L<T> = Record<Lang, T>;
const pick = <T,>(o: L<T>, lang: Lang): T => o[lang];

export interface Service {
  id: string;
  icon: string;
  title: L<string>;
  desc: L<string>;
  items: L<string[]>;
}

export interface Solution {
  id: string;
  icon: string;
  code: string;
  title: L<string>;
  desc: L<string>;
}

export const heroStats = [
  { value: 15, suffix: '+', key: 'hero.stat1' },
  { value: 9, suffix: '', key: 'hero.stat2' },
  { value: 7, suffix: '×', key: 'hero.stat3' },
  { value: 24, suffix: '/7', key: 'hero.stat4' },
] as const;

// Dịch vụ & giải pháp nổi bật (theo trang gốc)
const services: Service[] = [
  {
    id: 'soc',
    icon: 'radar',
    title: { vi: 'Trung tâm Điều hành An ninh mạng (SOC)', en: 'Security Operations Center (SOC)' },
    desc: {
      vi: 'Giám sát, phát hiện và phản ứng sự cố an ninh 24/7, vận hành bởi đội ngũ đạt chứng chỉ CREST.',
      en: '24/7 security monitoring, detection and incident response, run by a CREST-certified team.',
    },
    items: {
      vi: ['Giám sát 24/7', 'SIEM/SOAR', 'Săn tìm mối đe dọa', 'Ứng phó sự cố'],
      en: ['24/7 monitoring', 'SIEM/SOAR', 'Threat hunting', 'Incident response'],
    },
  },
  {
    id: 'pci',
    icon: 'clipboard-check',
    title: { vi: 'Tư vấn, Đánh giá & Cấp chứng chỉ PCI-DSS', en: 'PCI-DSS Consulting, Assessment & Certification' },
    desc: {
      vi: 'Đồng hành cùng doanh nghiệp đạt và duy trì chứng nhận PCI-DSS cho hệ thống thanh toán thẻ.',
      en: 'Helping enterprises achieve and maintain PCI-DSS certification for card payment systems.',
    },
    items: {
      vi: ['Khảo sát khoảng cách', 'Tư vấn khắc phục', 'Đánh giá QSA', 'Cấp chứng chỉ'],
      en: ['Gap assessment', 'Remediation advisory', 'QSA assessment', 'Certification'],
    },
  },
  {
    id: 'pentest',
    icon: 'target',
    title: { vi: 'Kiểm thử Bảo mật (Pentest)', en: 'Penetration Testing (Pentest)' },
    desc: {
      vi: 'Tấn công kiểm thử lỗ hổng theo chuẩn CREST, phát hiện điểm yếu trước khi bị khai thác.',
      en: 'CREST-standard penetration testing to find weaknesses before attackers do.',
    },
    items: {
      vi: ['Web & API', 'Hạ tầng mạng', 'Ứng dụng di động', 'Red Team'],
      en: ['Web & API', 'Network infrastructure', 'Mobile apps', 'Red Team'],
    },
  },
  {
    id: 'audit',
    icon: 'shield-search',
    title: { vi: 'Kiểm định An ninh (Security Audit)', en: 'Security Audit' },
    desc: {
      vi: 'Kiểm định, rà soát cấu hình và kiến trúc an ninh của hệ thống thông tin.',
      en: 'Auditing and reviewing the configuration and security architecture of information systems.',
    },
    items: {
      vi: ['Kiểm định hệ thống', 'Rà quét lỗ hổng (VA)', 'Kiểm toán cấu hình', 'Đánh giá rủi ro'],
      en: ['System audit', 'Vulnerability assessment', 'Configuration audit', 'Risk assessment'],
    },
  },
  {
    id: 'iso27001',
    icon: 'verified',
    title: { vi: 'Tư vấn tiêu chuẩn ISO/IEC 27001:2022', en: 'ISO/IEC 27001:2022 Consulting' },
    desc: {
      vi: 'Tư vấn, hướng dẫn xây dựng và vận hành Hệ thống quản lý ATTT theo ISO/IEC 27001:2022.',
      en: 'Advisory on building and operating an ISMS aligned with ISO/IEC 27001:2022.',
    },
    items: {
      vi: ['Đánh giá hiện trạng', 'Xây dựng ISMS', 'Đào tạo nhận thức', 'Hỗ trợ chứng nhận'],
      en: ['Gap analysis', 'ISMS build-out', 'Awareness training', 'Certification support'],
    },
  },
  {
    id: 'threat-intel',
    icon: 'globe',
    title: { vi: 'CMC Threats Intelligence', en: 'CMC Threats Intelligence' },
    desc: {
      vi: 'Thu thập, phân tích và cảnh báo sớm mối đe dọa; tích hợp lên nền tảng VirusTotal.',
      en: 'Collecting, analyzing and early-warning of threats; integrated with VirusTotal.',
    },
    items: {
      vi: ['Cảnh báo sớm', 'Phân tích IOC', 'Giám sát Dark Web', 'Tích hợp VirusTotal'],
      en: ['Early warning', 'IOC analysis', 'Dark-web monitoring', 'VirusTotal integration'],
    },
  },
];

// Sản phẩm & giải pháp (theo trang gốc)
const solutions: Solution[] = [
  {
    id: 'antivirus',
    icon: 'bug',
    code: 'CMC AntiVirus',
    title: { vi: 'Phần mềm diệt virus chuyên nghiệp', en: 'Professional Antivirus' },
    desc: {
      vi: 'CMC AntiVirus Professional đạt chứng nhận VB100, thành viên Microsoft Virus Initiative.',
      en: 'CMC AntiVirus Professional — VB100 certified and a Microsoft Virus Initiative member.',
    },
  },
  {
    id: 'cmdd',
    icon: 'cpu',
    code: 'CMDD',
    title: { vi: 'Phòng chống mã độc & quản trị tập trung', en: 'Malware Defense & Central Management' },
    desc: {
      vi: 'Giám sát và phòng thủ mã độc toàn diện trên thiết bị đầu cuối, quản trị tập trung.',
      en: 'Comprehensive endpoint malware detection and defense with centralized management.',
    },
  },
  {
    id: 'waf',
    icon: 'shield',
    code: 'C-WAF',
    title: { vi: 'Tường lửa bảo vệ website (WAF)', en: 'Web Application Firewall' },
    desc: {
      vi: 'Bảo vệ ứng dụng web khỏi OWASP Top 10, tấn công bot và khai thác lỗ hổng.',
      en: 'Protects web apps from the OWASP Top 10, bot attacks and exploitation.',
    },
  },
  {
    id: 'cshield',
    icon: 'smartphone',
    code: 'C-Shield',
    title: { vi: 'Bảo vệ ứng dụng di động', en: 'Mobile App Protection' },
    desc: {
      vi: 'Làm rối mã (obfuscation) và chống can thiệp runtime cho ứng dụng iOS, Android.',
      en: 'Code obfuscation and runtime tamper protection for iOS and Android apps.',
    },
  },
  {
    id: 'soc-service',
    icon: 'activity',
    code: 'CMC SOC',
    title: { vi: 'Dịch vụ Giám sát An ninh mạng', en: 'Managed Security Monitoring' },
    desc: {
      vi: 'Nền tảng SOC giám sát và phản ứng mối đe dọa được quản lý, vận hành liên tục 24/7.',
      en: 'A managed SOC platform monitoring and responding to threats, operating 24/7.',
    },
  },
  {
    id: 'ti',
    icon: 'network',
    code: 'CMC TI',
    title: { vi: 'Nền tảng Threats Intelligence', en: 'Threats Intelligence Platform' },
    desc: {
      vi: 'Nền tảng tình báo mối đe dọa, cảnh báo theo ngữ cảnh tổ chức, tích hợp VirusTotal.',
      en: 'A threat intelligence platform with context-aware alerts, integrated with VirusTotal.',
    },
  },
];

// Năng lực của CMC Cyber Security (4 trụ cột thật)
const whyChoose = [
  {
    icon: 'users',
    title: { vi: 'Đội ngũ Chuyên gia hàng đầu', en: 'Top-tier expert team' },
    desc: {
      vi: 'Sở hữu các chứng chỉ quốc tế: CISSP, QSA, CREST, OSCP, OSWE, OSEP, OSCE3, OSED.',
      en: 'Holding international certifications: CISSP, QSA, CREST, OSCP, OSWE, OSEP, OSCE3, OSED.',
    },
  },
  {
    icon: 'award',
    title: { vi: 'Chất lượng sản phẩm được công nhận', en: 'Recognized product quality' },
    desc: {
      vi: 'Frost & Sullivan, VB100 (Virus Bulletin), VNISA và nhiều giải thưởng uy tín trong, ngoài nước.',
      en: 'Frost & Sullivan, VB100 (Virus Bulletin), VNISA and many prestigious awards.',
    },
  },
  {
    icon: 'verified',
    title: { vi: 'Tiêu chuẩn quản lý bảo mật quốc tế', en: 'International security standards' },
    desc: {
      vi: 'Hệ thống quản lý bảo mật vận hành theo ISO/IEC 27001, ISO 20000 và SOC 2.',
      en: 'Security management operated to ISO/IEC 27001, ISO 20000 and SOC 2.',
    },
  },
  {
    icon: 'heart',
    title: { vi: 'Chăm sóc khách hàng chuyên biệt', en: 'Dedicated customer care' },
    desc: {
      vi: 'Phương châm phục vụ: Chuyên nghiệp — Nhanh chóng — Cam kết — Sáng tạo.',
      en: 'Our service ethos: Professional — Fast — Committed — Innovative.',
    },
  },
];

// Chứng chỉ chuyên gia & tiêu chuẩn (theo trang gốc)
const certs = [
  'CISSP', 'QSA', 'CREST Security Testing', 'CREST Security Operations',
  'OSCP', 'OSWE', 'OSEP', 'OSCE3', 'OSED',
  'ISO 27001', 'ISO 20000', 'SOC 2', 'VB100',
];

const clients = ['Vietlott', 'Edenred', 'Sun Group', 'NAPAS', 'Dai-ichi Life', 'IP&MAC'];

const process = [
  {
    no: '01',
    title: { vi: 'Đánh giá', en: 'Assess' },
    desc: {
      vi: 'Khảo sát hiện trạng, xác định tài sản trọng yếu và mức độ rủi ro.',
      en: 'Survey the current state, identify critical assets and risk levels.',
    },
  },
  {
    no: '02',
    title: { vi: 'Chiến lược', en: 'Strategy' },
    desc: {
      vi: 'Xây dựng lộ trình bảo mật phù hợp với mục tiêu và ngân sách của bạn.',
      en: 'Build a security roadmap aligned with your goals and budget.',
    },
  },
  {
    no: '03',
    title: { vi: 'Triển khai', en: 'Implement' },
    desc: {
      vi: 'Triển khai giải pháp, kiểm thử và tinh chỉnh theo môi trường thực tế.',
      en: 'Deploy solutions, test and fine-tune for your real environment.',
    },
  },
  {
    no: '04',
    title: { vi: 'Vận hành & Giám sát', en: 'Operate & Monitor' },
    desc: {
      vi: 'Giám sát 24/7, ứng phó sự cố và cải tiến liên tục năng lực phòng thủ.',
      en: '24/7 monitoring, incident response and continuous defense improvement.',
    },
  },
];

// Giá trị cốt lõi (theo trang gốc: Chuyên nghiệp — Nhanh chóng — Cam kết — Sáng tạo)
const values = [
  {
    icon: 'verified',
    title: { vi: 'Chuyên nghiệp', en: 'Professional' },
    desc: { vi: 'Đội ngũ chuyên gia trình độ quốc tế, quy trình làm việc bài bản.', en: 'World-class experts with rigorous, professional processes.' },
  },
  {
    icon: 'lightning',
    title: { vi: 'Nhanh chóng', en: 'Fast' },
    desc: { vi: 'Phản hồi và xử lý yêu cầu nhanh, giảm thiểu gián đoạn cho khách hàng.', en: 'Fast response and resolution, minimizing disruption for customers.' },
  },
  {
    icon: 'heart',
    title: { vi: 'Cam kết', en: 'Committed' },
    desc: { vi: 'Đồng hành và cam kết bảo vệ hệ thống thông tin của khách hàng.', en: 'Committed to standing by and protecting our customers’ systems.' },
  },
  {
    icon: 'sparkles',
    title: { vi: 'Sáng tạo', en: 'Innovative' },
    desc: { vi: 'Không ngừng nghiên cứu, đổi mới giải pháp phòng thủ an ninh mạng.', en: 'Continuously researching and innovating cyber-defense solutions.' },
  },
];

// Tin tức thật (theo trang gốc)
const news = [
  {
    tag: { vi: 'Tin tức chung', en: 'News' },
    date: '2026-06-04',
    title: {
      vi: 'Chỉ còn gần 1 tháng trước khi Luật An ninh mạng 2025 có hiệu lực: Doanh nghiệp cần làm gì ngay?',
      en: 'One month before the 2025 Cybersecurity Law takes effect: what should enterprises do now?',
    },
    excerpt: {
      vi: 'Những đầu việc doanh nghiệp cần chuẩn bị để tuân thủ Luật An ninh mạng 2025 kịp thời hạn.',
      en: 'Key actions enterprises should take to comply with the 2025 Cybersecurity Law in time.',
    },
  },
  {
    tag: { vi: 'Chứng nhận', en: 'Certification' },
    date: '2026-05-07',
    title: {
      vi: 'CMC Cyber Security sở hữu chứng nhận CREST cho Pentest & SOC: Doanh nghiệp được lợi gì?',
      en: 'CMC Cyber Security earns CREST for Pentest & SOC: what do enterprises gain?',
    },
    excerpt: {
      vi: 'Chứng nhận CREST khẳng định năng lực kiểm thử và vận hành giám sát an ninh theo chuẩn quốc tế.',
      en: 'CREST certification affirms internationally benchmarked testing and security-operations capability.',
    },
  },
  {
    tag: { vi: 'Tin kỹ thuật', en: 'Technical' },
    date: '2026-05-04',
    title: {
      vi: 'Chỉ dùng Microsoft Defender: Doanh nghiệp có đang bỏ trống tuyến phòng thủ endpoint?',
      en: 'Only using Microsoft Defender: are enterprises leaving endpoint defense exposed?',
    },
    excerpt: {
      vi: 'Phân tích các khoảng trống khi chỉ dựa vào Defender và cách bổ sung lớp phòng thủ endpoint.',
      en: 'Analyzing the gaps of relying on Defender alone and how to strengthen endpoint defense.',
    },
  },
];

const jobs = [
  {
    title: { vi: 'Chuyên gia Kiểm thử xâm nhập (Pentester)', en: 'Penetration Tester' },
    location: { vi: 'Hà Nội', en: 'Hanoi' },
    type: { vi: 'Toàn thời gian', en: 'Full-time' },
    level: { vi: 'Trung – Cao cấp', en: 'Mid – Senior' },
  },
  {
    title: { vi: 'Kỹ sư phân tích SOC (Tier 2)', en: 'SOC Analyst (Tier 2)' },
    location: { vi: 'Hà Nội', en: 'Hanoi' },
    type: { vi: 'Toàn thời gian', en: 'Full-time' },
    level: { vi: 'Trung cấp', en: 'Mid level' },
  },
  {
    title: { vi: 'Chuyên gia Ứng phó sự cố & Forensics', en: 'Incident Response & Forensics Specialist' },
    location: { vi: 'TP. Hồ Chí Minh', en: 'Ho Chi Minh City' },
    type: { vi: 'Toàn thời gian', en: 'Full-time' },
    level: { vi: 'Cao cấp', en: 'Senior' },
  },
  {
    title: { vi: 'Tư vấn Tuân thủ (ISO 27001 / PCI-DSS)', en: 'Compliance Consultant (ISO 27001 / PCI-DSS)' },
    location: { vi: 'Hà Nội', en: 'Hanoi' },
    type: { vi: 'Toàn thời gian', en: 'Full-time' },
    level: { vi: 'Trung – Cao cấp', en: 'Mid – Senior' },
  },
];

const offices = [
  {
    city: { vi: 'Hà Nội', en: 'Hanoi' },
    address: {
      vi: 'Tầng 15, Tòa nhà CMC, Số 11 Duy Tân, Phường Cầu Giấy, Hà Nội',
      en: 'Floor 15, CMC Tower, 11 Duy Tan, Cau Giay, Hanoi',
    },
  },
  {
    city: { vi: 'TP. Hồ Chí Minh', en: 'Ho Chi Minh City' },
    address: {
      vi: 'Tòa nhà CMC Creative Space, KCX Tân Thuận, Quận 7, TP. HCM',
      en: 'CMC Creative Space, Tan Thuan EPZ, District 7, HCMC',
    },
  },
];

export const contactInfo = {
  hotline: '1900 2025',
  phone: '(024) 3795 8282 - (024) 3795 8228',
  email: 'contact@cmccybersecurity.com',
  support: 'support@cmccybersecurity.com',
};

// Ba thẻ tính năng dưới hero (thẻ giữa nổi bật)
const featureTrio = [
  {
    icon: 'globe',
    title: { vi: 'Bảo vệ quyền riêng tư', en: 'Protect your privacy' },
    desc: {
      vi: 'Che chắn danh tính số và dữ liệu của tổ chức khỏi mọi hành vi theo dõi, rò rỉ.',
      en: 'Shield your organization’s digital identity and data from tracking and leaks.',
    },
    highlight: false,
  },
  {
    icon: 'radar',
    title: { vi: 'Bảo vệ thời gian thực', en: 'Real-time protection' },
    desc: {
      vi: 'Phát hiện và chặn đứng mối đe dọa ngay khi xuất hiện, giám sát 24/7 không gián đoạn.',
      en: 'Detect and block threats as they emerge, with uninterrupted 24/7 monitoring.',
    },
    highlight: true,
  },
  {
    icon: 'fingerprint',
    title: { vi: 'Bảo mật danh tính', en: 'Secure your identity' },
    desc: {
      vi: 'Xác thực mạnh và mã hóa giúp thông tin nhạy cảm của bạn luôn an toàn.',
      en: 'Strong authentication and encryption keep your sensitive information safe.',
    },
    highlight: false,
  },
];

// Năng lực của CMC (checklist bên cạnh ảnh)
const deviceChecklist = [
  {
    icon: 'users',
    title: { vi: 'Đội ngũ chuyên gia hàng đầu', en: 'Top-tier expert team' },
    desc: { vi: 'Chuyên gia sở hữu chứng chỉ CISSP, CREST, OSCP… đồng hành cùng bạn.', en: 'Experts holding CISSP, CREST, OSCP and more standing by you.' },
  },
  {
    icon: 'award',
    title: { vi: 'Sản phẩm được công nhận', en: 'Recognized products' },
    desc: { vi: 'Đạt VB100, Frost & Sullivan, VNISA và là thành viên Microsoft Virus Initiative.', en: 'VB100, Frost & Sullivan, VNISA awards and a Microsoft Virus Initiative member.' },
  },
  {
    icon: 'verified',
    title: { vi: 'Vận hành theo chuẩn quốc tế', en: 'Operated to global standards' },
    desc: { vi: 'Hệ thống quản lý bảo mật đạt ISO 27001, ISO 20000, SOC 2 và giám sát 24/7.', en: 'Security management to ISO 27001, ISO 20000, SOC 2 with 24/7 monitoring.' },
  },
];

// 3 nhóm dịch vụ chính (theo trang gốc)
const activityCards = [
  {
    icon: 'clipboard-check',
    title: { vi: 'Tư vấn, Đánh giá & Chứng nhận tuân thủ', en: 'Compliance Consulting & Certification' },
    sub: { vi: 'Đạt và duy trì các chuẩn mực quốc tế', en: 'Achieve and maintain international standards' },
    items: {
      vi: ['PCI-DSS', 'ISO/IEC 27001:2022', 'Đánh giá SWIFT', 'TCVN 14423:2025'],
      en: ['PCI-DSS', 'ISO/IEC 27001:2022', 'SWIFT assessment', 'TCVN 14423:2025'],
    },
    highlight: false,
  },
  {
    icon: 'shield-search',
    title: { vi: 'Đánh giá An ninh mạng', en: 'Cybersecurity Assessment' },
    sub: { vi: 'Phát hiện điểm yếu trước khi bị khai thác', en: 'Find weaknesses before they are exploited' },
    items: {
      vi: ['Kiểm thử bảo mật (Pentest)', 'Kiểm định an ninh (Audit)', 'Rà quét lỗ hổng (VA)', 'Threats Intelligence'],
      en: ['Penetration Testing', 'Security Audit', 'Vulnerability Assessment', 'Threats Intelligence'],
    },
    highlight: true,
  },
  {
    icon: 'radar',
    title: { vi: 'Quản trị & Bảo mật đầu cuối', en: 'Management & Endpoint Security' },
    sub: { vi: 'Giám sát và phòng thủ liên tục', en: 'Continuous monitoring and defense' },
    items: {
      vi: ['Trung tâm SOC', 'CMC AntiVirus', 'Phòng chống mã độc CMDD', 'Tường lửa WAF & C-Shield'],
      en: ['SOC center', 'CMC AntiVirus', 'CMDD malware defense', 'WAF & C-Shield'],
    },
    highlight: false,
  },
];

// Dịch vụ chăm sóc khách hàng chuyên biệt — 4 giá trị (theo trang gốc)
const assetFeatures = [
  {
    icon: 'verified',
    title: { vi: 'Chuyên nghiệp', en: 'Professional' },
    desc: { vi: 'Đội ngũ chuyên gia trình độ quốc tế, quy trình phục vụ bài bản.', en: 'World-class experts with rigorous service processes.' },
  },
  {
    icon: 'lightning',
    title: { vi: 'Nhanh chóng', en: 'Fast' },
    desc: { vi: 'Phản hồi và xử lý yêu cầu nhanh, giảm thiểu gián đoạn.', en: 'Fast response and resolution, minimizing disruption.' },
  },
  {
    icon: 'heart',
    title: { vi: 'Cam kết', en: 'Committed' },
    desc: { vi: 'Đồng hành và cam kết bảo vệ hệ thống của khách hàng.', en: 'Committed to protecting our customers’ systems.' },
  },
  {
    icon: 'sparkles',
    title: { vi: 'Sáng tạo', en: 'Innovative' },
    desc: { vi: 'Liên tục nghiên cứu, đổi mới giải pháp phòng thủ.', en: 'Continuously innovating defensive solutions.' },
  },
];

// Số liệu (bám sát năng lực & giải thưởng thật)
const stats = [
  { value: 5, suffix: '', label: { vi: 'Top DN kiểm tra & đánh giá ATTT Việt Nam (2024)', en: 'Top 5 Vietnam security assessment firms (2024)' } },
  { value: 7, suffix: '×', label: { vi: 'CMDD đạt VB100 điểm tuyệt đối liên tiếp', en: 'CMDD VB100 perfect scores in a row' } },
  { value: 24, suffix: '/7', label: { vi: 'Trung tâm SOC giám sát liên tục', en: 'SOC continuous monitoring' } },
];

// Ghi nhận & giải thưởng (dải xanh)
const trustItems = [
  { icon: 'award', value: { vi: 'Frost & Sullivan', en: 'Frost & Sullivan' }, sub: { vi: 'Đơn vị dẫn đầu Việt Nam về dịch vụ ATTT trọn gói', en: 'Vietnam leader in end-to-end security services' } },
  { icon: 'verified', value: { vi: 'VB100 (Virus Bulletin)', en: 'VB100 (Virus Bulletin)' }, sub: { vi: 'CMDD đạt chứng chỉ quốc tế với điểm tuyệt đối', en: 'CMDD certified internationally with perfect scores' } },
  { icon: 'shield', value: { vi: 'Microsoft Virus Initiative', en: 'Microsoft Virus Initiative' }, sub: { vi: 'Thành viên liên minh phòng chống mã độc của Microsoft', en: 'Member of Microsoft’s anti-malware alliance' } },
];

// Chất lượng sản phẩm được công nhận (ghi nhận từ các tổ chức uy tín)
const testimonials = [
  {
    quote: {
      vi: '“Đơn vị dẫn đầu Việt Nam cung cấp các dịch vụ trọn gói về an ninh, an toàn thông tin — Nhà cung cấp dịch vụ bảo mật Việt Nam xuất sắc của năm.”',
      en: '“Vietnam’s leader in end-to-end information-security services — Information Security Service Provider of the Year.”',
    },
    name: 'Frost Sullivan',
    role: { vi: 'Đánh giá thị trường quốc tế', en: 'International market research' },
    company: 'Frost & Sullivan',
  },
  {
    quote: {
      vi: '“Giải pháp CMDD đạt chứng chỉ quốc tế VB100 nhiều lần liên tiếp với điểm tuyệt đối.”',
      en: '“The CMDD solution earned the international VB100 certification multiple times in a row with perfect scores.”',
    },
    name: 'Virus Bulletin',
    role: { vi: 'Chứng nhận VB100', en: 'VB100 certification' },
    company: 'Virus Bulletin',
  },
  {
    quote: {
      vi: '“Top 5 doanh nghiệp Việt Nam về kiểm tra và đánh giá ATTT mạng 2024, cùng nhiều sản phẩm – dịch vụ ATTT tiêu biểu.”',
      en: '“Top 5 Vietnamese firms for cybersecurity testing and assessment in 2024, with many outstanding security products and services.”',
    },
    name: 'VNISA',
    role: { vi: 'Hiệp hội An toàn thông tin Việt Nam', en: 'Vietnam Information Security Association' },
    company: 'VNISA',
  },
];

// Hỗ trợ khách hàng (theo trang gốc)
const supportCards = [
  {
    icon: 'phone',
    title: { vi: 'Liên hệ', en: 'Contact' },
    desc: { vi: 'Kết nối với đội ngũ tư vấn kinh doanh của CMC Cyber Security.', en: 'Connect with the CMC Cyber Security business team.' },
    cta: { vi: 'Liên hệ ngay', en: 'Contact now' },
  },
  {
    icon: 'clipboard-check',
    title: { vi: 'Tạo yêu cầu hỗ trợ', en: 'Create a support request' },
    desc: { vi: 'Gửi yêu cầu và theo dõi tiến độ xử lý một cách minh bạch.', en: 'Submit a request and track its progress transparently.' },
    cta: { vi: 'Tạo yêu cầu', en: 'Open a ticket' },
  },
  {
    icon: 'verified',
    title: { vi: 'Tra cứu chứng chỉ PCI-DSS', en: 'Verify PCI-DSS certificate' },
    desc: { vi: 'Xác minh chứng chỉ PCI-DSS đã được CMC cấp cho tổ chức.', en: 'Verify a PCI-DSS certificate issued by CMC.' },
    cta: { vi: 'Tra cứu', en: 'Verify' },
  },
];

// Localized accessors --------------------------------------------------------
export const getServices = (lang: Lang) =>
  services.map((s) => ({ id: s.id, icon: s.icon, title: pick(s.title, lang), desc: pick(s.desc, lang), items: pick(s.items, lang) }));

export const getSolutions = (lang: Lang) =>
  solutions.map((s) => ({ id: s.id, icon: s.icon, code: s.code, title: pick(s.title, lang), desc: pick(s.desc, lang) }));

export const getWhyChoose = (lang: Lang) =>
  whyChoose.map((w) => ({ icon: w.icon, title: pick(w.title, lang), desc: pick(w.desc, lang) }));

export const getProcess = (lang: Lang) =>
  process.map((p) => ({ no: p.no, title: pick(p.title, lang), desc: pick(p.desc, lang) }));

export const getValues = (lang: Lang) =>
  values.map((v) => ({ icon: v.icon, title: pick(v.title, lang), desc: pick(v.desc, lang) }));

export const getNews = (lang: Lang) =>
  news.map((n) => ({ tag: pick(n.tag, lang), date: n.date, title: pick(n.title, lang), excerpt: pick(n.excerpt, lang) }));

export const getJobs = (lang: Lang) =>
  jobs.map((j) => ({ title: pick(j.title, lang), location: pick(j.location, lang), type: pick(j.type, lang), level: pick(j.level, lang) }));

export const getOffices = (lang: Lang) =>
  offices.map((o) => ({ city: pick(o.city, lang), address: pick(o.address, lang) }));

export const getFeatureTrio = (lang: Lang) =>
  featureTrio.map((f) => ({ icon: f.icon, title: pick(f.title, lang), desc: pick(f.desc, lang), highlight: f.highlight }));

export const getDeviceChecklist = (lang: Lang) =>
  deviceChecklist.map((d) => ({ icon: d.icon, title: pick(d.title, lang), desc: pick(d.desc, lang) }));

export const getActivityCards = (lang: Lang) =>
  activityCards.map((a) => ({ icon: a.icon, title: pick(a.title, lang), sub: pick(a.sub, lang), items: pick(a.items, lang), highlight: a.highlight }));

export const getAssetFeatures = (lang: Lang) =>
  assetFeatures.map((a) => ({ icon: a.icon, title: pick(a.title, lang), desc: pick(a.desc, lang) }));

export const getStats = (lang: Lang) =>
  stats.map((s) => ({ value: s.value, suffix: s.suffix, label: pick(s.label, lang) }));

export const getTrustItems = (lang: Lang) =>
  trustItems.map((t) => ({ icon: t.icon, value: pick(t.value, lang), sub: pick(t.sub, lang) }));

export const getTestimonials = (lang: Lang) =>
  testimonials.map((t) => ({ quote: pick(t.quote, lang), name: t.name, role: pick(t.role, lang), company: t.company }));

export const getSupportCards = (lang: Lang) =>
  supportCards.map((s) => ({ icon: s.icon, title: pick(s.title, lang), desc: pick(s.desc, lang), cta: pick(s.cta, lang) }));

export { certs, clients };
