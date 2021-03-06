export interface WebsiteConfig {
  title: string;
  description: string;
  coverImage?: string;
  logo: string;
  /**
   * Specifying a valid BCP 47 language helps screen readers announce text properly.
   * See: https://dequeuniversity.com/rules/axe/2.2/valid-lang
   */
  lang: string;
  /**
   * blog full path, no ending slash!
   */
  siteUrl: string;
  /**
   * full url, no username
   */
  facebook?: string;
  /**
   * full url, no username
   */
  twitter?: string;
  /**
   * hide or show all email subscribe boxes
   */
  showSubscribe: boolean;
  /**
   * create a list on mailchimp and then create an embeddable signup form. this is the form action
   */
  mailchimpAction?: string;
  /**
   * this is the hidden input field name
   */
  mailchimpName?: string;
  /**
   * name and id of the mailchimp email field
   */
  mailchimpEmailFieldName?: string;
  /**
  /**
   * Meta tag for Google Webmaster Tools
   */
  googleSiteVerification?: string;
  /**
  /**
   * Appears alongside the footer, after the credits
   */
  footer?: string;
}

const config: WebsiteConfig = {
  title: 'Mattia Sanfilippo',
  description: 'Software Engineer based in Italy. I build websites and apps!',
  coverImage: 'img/blog-cover.png',
  logo: 'img/mattia_sanfilippo_logo.png',
  lang: 'en',
  siteUrl: 'https://mattiasanfilippo.dev',
  facebook: 'https://www.facebook.com/mattiasanfilippo',
  twitter: 'https://twitter.com/imattolo',
  showSubscribe: true,
  mailchimpAction: 'https://dev.us6.list-manage.com/subscribe/post?u=7df7ed239e19c729326ac9850&amp;id=019784dbac',
  mailchimpName: 'b_7df7ed239e19c729326ac9850_019784dbac',
  mailchimpEmailFieldName: 'MERGE0',
  googleSiteVerification: 'GoogleCode',
  footer: 'is based on Gatsby',
};

export default config;
