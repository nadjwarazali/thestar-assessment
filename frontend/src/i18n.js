import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    navbar: { exhibitor: 'Be Our Exhibitor', contact: 'Contact Us' },
    info: {
      infoExpo:
        'As one of Malaysia’s largest recruitment event providers, myStarjob Fair has served over 26,000 companies and 120,000 visitors. By exhibiting at our fair you will stand a chance to meet a diverse range of candidates and enhance your corporate branding.<br/><br/> Since The Star Newspaper also organizes this event, it gives extra mileage in terms of publicity and status as one of the top hiring companies in Malaysia.',
    },
    partner: { title: 'Trusted by Leading Employers' },
    floorDirectory: { title: 'Floor Directory' },
    jobMatching: {
      title: 'Job Matching & Career Talk Sessions',
      info: 'Each session will have 12 recruiters and up to 24 jobseekers. Each discussion will be 2 minutes. Jobseekers will move to the next recruiter when the times are up, The recruuiter remains at their place. A lucky draw for the jobseekers will be done at the end of the sessions.',
      button: 'Reserve a slot',
    },
    contact: {
      subtitle: 'Have questions about the Job Fair? Send us a message and we’ll get back to you',
      button: 'Send Message',
    },
  },
  ms: {
    navbar: { exhibitor: 'Sertai Pameran', contact: 'Hubungi Kami' },
    info: {
      infoExpo:
        'Sebagai salah satu penyedia acara pengambilan terbesar di Malaysia, myStarjob Fair telah berkhidmat kepada lebih 26,000 syarikat dan 120,000 pelawat. Dengan mempamerkan di pameran kami, anda akan berpeluang bertemu dengan pelbagai calon dan meningkatkan penjenamaan korporat anda.<br/><br/> Memandangkan The Star Newspaper turut menganjurkan acara ini, ia memberikan perbatuan tambahan dari segi publisiti dan status sebagai salah satu syarikat pengambilan pekerja terbaik di Malaysia.',
    },
    partner: { title: 'Dipercayai oleh Majikan Terkemuka' },
    floorDirectory: { title: 'Direktori Lantai' },
    jobMatching: {
      title: 'Sesi Padanan Kerja & Ceramah Kerjaya',
      info: 'Setiap sesi akan mempunyai 12 perekrut dan sehingga 24 pencari kerja. Setiap perbincangan akan mengambil masa 2 minit. Pencari kerja akan berpindah ke perekrut seterusnya apabila masanya tamat, Perekrut kekal di tempat mereka. Cabutan bertuah untuk pencari kerja akan dilakukan pada akhir sesi.',
      button: 'Tempah slot',
    },
    contact: {
      subtitle:
        'Ada soalan tentang Pameran Kerja? Hantar mesej kepada kami dan kami akan menghubungi anda kembali',
      button: 'Hantar Mesej',
    },
  },
}

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
})

export default i18n
