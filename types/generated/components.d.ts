import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentBlogSection extends Struct.ComponentSchema {
  collectionName: 'components_component_blog_sections';
  info: {
    displayName: 'Blog Section';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface ComponentConditionAndTreatmentSection
  extends Struct.ComponentSchema {
  collectionName: 'components_component_condition_and_treatment_sections';
  info: {
    description: '';
    displayName: 'Disease & Procedure Section';
    icon: 'dashboard';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface ComponentContactField extends Struct.ComponentSchema {
  collectionName: 'components_component_contact_fields';
  info: {
    description: '';
    displayName: 'Contact Field';
  };
  attributes: {
    icon: Schema.Attribute.String;
    phone: Schema.Attribute.String;
  };
}

export interface ComponentContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_component_contact_infos';
  info: {
    displayName: 'Contact Info';
  };
  attributes: {
    address: Schema.Attribute.String;
    contactPerson: Schema.Attribute.String;
    designation: Schema.Attribute.String;
    email: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    sectionTitle: Schema.Attribute.String;
  };
}

export interface ComponentContentCard extends Struct.ComponentSchema {
  collectionName: 'components_component_content_cards';
  info: {
    displayName: 'Content Card';
  };
  attributes: {
    details: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentContentCardRepeater extends Struct.ComponentSchema {
  collectionName: 'components_component_content_card_repeaters';
  info: {
    displayName: 'Content Card Repeater';
  };
  attributes: {
    contentCard: Schema.Attribute.Component<'component.content-card', true>;
  };
}

export interface ComponentContentOnly extends Struct.ComponentSchema {
  collectionName: 'components_component_content_onlies';
  info: {
    description: '';
    displayName: 'Content Only';
  };
  attributes: {
    content: Schema.Attribute.Text;
  };
}

export interface ComponentCourseListSection extends Struct.ComponentSchema {
  collectionName: 'components_component_course_list_sections';
  info: {
    description: '';
    displayName: 'Course List Section';
  };
  attributes: {
    courseCategory: Schema.Attribute.Relation<
      'oneToOne',
      'api::course-category.course-category'
    >;
    title: Schema.Attribute.String;
  };
}

export interface ComponentCourseSection extends Struct.ComponentSchema {
  collectionName: 'components_component_course_sections';
  info: {
    displayName: 'Course Section';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface ComponentDoctorTalk extends Struct.ComponentSchema {
  collectionName: 'components_component_doctor_talks';
  info: {
    description: '';
    displayName: 'Doctor Talk Section';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface ComponentExpertSection extends Struct.ComponentSchema {
  collectionName: 'components_component_expert_section_s';
  info: {
    description: '';
    displayName: 'Sub Speciality Section';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface ComponentFaQdata extends Struct.ComponentSchema {
  collectionName: 'components_component_fa_qdata';
  info: {
    description: '';
    displayName: 'FAQ Item';
  };
  attributes: {
    answer: Schema.Attribute.RichText;
    question: Schema.Attribute.String;
  };
}

export interface ComponentFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_component_faq_sections';
  info: {
    description: '';
    displayName: 'FAQ Section';
    icon: 'apps';
  };
  attributes: {
    faqData: Schema.Attribute.Component<'component.fa-qdata', true>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentFileDownload extends Struct.ComponentSchema {
  collectionName: 'components_component_file_downloads';
  info: {
    displayName: 'File Download';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    file: Schema.Attribute.Media<'images' | 'videos' | 'audios' | 'files'>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentHealthPackageSection extends Struct.ComponentSchema {
  collectionName: 'components_component_health_package_sections';
  info: {
    displayName: 'Health Package Section';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface ComponentHighlightButtonItem extends Struct.ComponentSchema {
  collectionName: 'components_component_highlight_button_items';
  info: {
    displayName: 'Highlight Button Item';
  };
  attributes: {
    hyperlink: Schema.Attribute.String;
    iconImage: Schema.Attribute.Media<'images'>;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ComponentHighlightButtonSection
  extends Struct.ComponentSchema {
  collectionName: 'components_component_highlight_button_sections';
  info: {
    displayName: 'Highlight Button Section';
  };
  attributes: {
    highlightButtonItem: Schema.Attribute.Component<
      'component.highlight-button-item',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface ComponentHighlightCard extends Struct.ComponentSchema {
  collectionName: 'components_component_highlight_cards';
  info: {
    description: '';
    displayName: 'Highlight Card';
  };
  attributes: {
    card1Hyperlink: Schema.Attribute.String;
    card1Icon: Schema.Attribute.Media<'images'>;
    card1Title: Schema.Attribute.String;
    card2Hyperlink: Schema.Attribute.String;
    card2Icon: Schema.Attribute.Media<'images'>;
    card2Title: Schema.Attribute.String;
    card3Hyperlink: Schema.Attribute.String;
    card3Icon: Schema.Attribute.Media<'images'>;
    card3Title: Schema.Attribute.String;
    card4Contact: Schema.Attribute.String;
    card4Icon: Schema.Attribute.Media<'images'>;
    card4Title: Schema.Attribute.String;
  };
}

export interface ComponentHomeServiceSection extends Struct.ComponentSchema {
  collectionName: 'components_component_home_service_sections';
  info: {
    displayName: 'Home Service Section';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface ComponentHospitalSection extends Struct.ComponentSchema {
  collectionName: 'components_component_hospital_sections';
  info: {
    description: '';
    displayName: 'Overview with Video';
    icon: 'apps';
  };
  attributes: {
    caption: Schema.Attribute.String;
    details: Schema.Attribute.RichText;
    shortDetails: Schema.Attribute.String;
    subTitle: Schema.Attribute.String;
    thumbnail: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
    videoId: Schema.Attribute.String;
  };
}

export interface ComponentHospitalsSection extends Struct.ComponentSchema {
  collectionName: 'components_component_hospitals_sections';
  info: {
    displayName: 'Hospitals Section';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface ComponentJournal extends Struct.ComponentSchema {
  collectionName: 'components_component_journals';
  info: {
    displayName: 'Journal';
  };
  attributes: {
    journal: Schema.Attribute.Component<'component.journal-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentJournalItem extends Struct.ComponentSchema {
  collectionName: 'components_component_journal_items';
  info: {
    description: '';
    displayName: 'Journal Item';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    thumbnailImage: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentLogoItem extends Struct.ComponentSchema {
  collectionName: 'components_component_logo_items';
  info: {
    description: '';
    displayName: 'Logo Item';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentLogoSection extends Struct.ComponentSchema {
  collectionName: 'components_component_logo_sections';
  info: {
    description: '';
    displayName: 'Logo Section';
  };
  attributes: {
    logoSlider: Schema.Attribute.Component<'component.logo-item', true>;
  };
}

export interface ComponentMediaAndEventsSection extends Struct.ComponentSchema {
  collectionName: 'components_component_media_and_events_sections';
  info: {
    displayName: 'Media and Events Section';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface ComponentMediaCoverage extends Struct.ComponentSchema {
  collectionName: 'components_component_media_coverages';
  info: {
    displayName: 'Media Coverage';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface ComponentMeetOurExpertSection extends Struct.ComponentSchema {
  collectionName: 'components_component_meet_our_expert_sections';
  info: {
    description: '';
    displayName: 'Meet Our Expert Section';
    icon: 'apps';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface ComponentMetaSection extends Struct.ComponentSchema {
  collectionName: 'components_component_meta_sections';
  info: {
    description: '';
    displayName: 'Meta Section';
  };
  attributes: {
    extraHeaderCode: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.Text;
    metaKeyword: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String;
  };
}

export interface ComponentMilestoneItem extends Struct.ComponentSchema {
  collectionName: 'components_component_milestone_items';
  info: {
    displayName: 'Milestone Item';
  };
  attributes: {
    events: Schema.Attribute.Component<'component.title-only', true>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentMilestoneSection extends Struct.ComponentSchema {
  collectionName: 'components_component_milestone_sections';
  info: {
    displayName: 'Milestone Section';
  };
  attributes: {
    item: Schema.Attribute.Component<'component.milestone-item', true>;
  };
}

export interface ComponentMinimalAppearance extends Struct.ComponentSchema {
  collectionName: 'components_component_minimal_appearances';
  info: {
    description: '';
    displayName: 'Minimal Appearance';
  };
  attributes: {
    orderInFeaturedList: Schema.Attribute.Decimal &
      Schema.Attribute.DefaultTo<1999>;
    orderInMasterList: Schema.Attribute.Decimal &
      Schema.Attribute.DefaultTo<1999>;
    showInFeaturedList: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface ComponentOverviewWithImage extends Struct.ComponentSchema {
  collectionName: 'components_component_overview_with_images';
  info: {
    description: '';
    displayName: 'Overview with Image';
  };
  attributes: {
    details: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images'>;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ComponentOverviewWithRichEditor
  extends Struct.ComponentSchema {
  collectionName: 'components_component_overview_with_rich_editors';
  info: {
    displayName: 'Overview with Rich Editor';
  };
  attributes: {
    details: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ComponentOverviewWithoutImage extends Struct.ComponentSchema {
  collectionName: 'components_component_overview_without_images';
  info: {
    displayName: 'Overview without Image';
  };
  attributes: {
    details: Schema.Attribute.RichText;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ComponentPageBanner extends Struct.ComponentSchema {
  collectionName: 'components_component_page_banners';
  info: {
    description: '';
    displayName: 'Page Banner Item';
  };
  attributes: {
    bannerImageDesktop: Schema.Attribute.Media<'images' | 'files'>;
    bannerImageMobile: Schema.Attribute.Media<'images'>;
    hyperlink: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ComponentPageBannerSection extends Struct.ComponentSchema {
  collectionName: 'components_component_page_banner_sections';
  info: {
    description: '';
    displayName: 'Page Banner Section';
  };
  attributes: {
    bannerItem: Schema.Attribute.Component<'component.page-banner', true>;
  };
}

export interface ComponentPageTitle extends Struct.ComponentSchema {
  collectionName: 'components_component_page_titles';
  info: {
    description: '';
    displayName: 'Page Header';
  };
  attributes: {
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ComponentSocialMediaUpdates extends Struct.ComponentSchema {
  collectionName: 'components_component_social_media_updates';
  info: {
    displayName: 'Social Media Updates';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface ComponentSocomer extends Struct.ComponentSchema {
  collectionName: 'components_component_socomers';
  info: {
    description: '';
    displayName: 'Socomer';
  };
  attributes: {
    socomer: Schema.Attribute.Component<'component.socomer-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentSocomerItem extends Struct.ComponentSchema {
  collectionName: 'components_component_socomer_items';
  info: {
    description: '';
    displayName: 'Socomer Item';
  };
  attributes: {
    socomerItem: Schema.Attribute.Component<'component.file-download', true>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentSpeakerItem extends Struct.ComponentSchema {
  collectionName: 'components_component_speaker_items';
  info: {
    displayName: 'Speaker Item';
  };
  attributes: {
    by: Schema.Attribute.String;
    hospitalName: Schema.Attribute.String;
    topic: Schema.Attribute.String;
  };
}

export interface ComponentSpeakerSection extends Struct.ComponentSchema {
  collectionName: 'components_component_speaker_sections';
  info: {
    displayName: 'Speaker Section';
  };
  attributes: {
    speaker: Schema.Attribute.Component<'component.speaker-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentSpecialitySection extends Struct.ComponentSchema {
  collectionName: 'components_component_speciality_sections';
  info: {
    displayName: 'Speciality Section';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface ComponentTestimonialSection extends Struct.ComponentSchema {
  collectionName: 'components_component_testimonial_sections';
  info: {
    description: '';
    displayName: 'Testimonial Section';
    icon: 'apps';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface ComponentTitleOnly extends Struct.ComponentSchema {
  collectionName: 'components_component_title_onlies';
  info: {
    displayName: 'Title Only';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface ComponentUspSSection extends Struct.ComponentSchema {
  collectionName: 'components_component_usp_s_sections';
  info: {
    displayName: "USP'S Section";
  };
  attributes: {
    uspItem: Schema.Attribute.Component<'component.usp-section', true>;
  };
}

export interface ComponentUspSection extends Struct.ComponentSchema {
  collectionName: 'components_component_usp_sections';
  info: {
    description: '';
    displayName: 'USP Item';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    number: Schema.Attribute.String;
    suffix: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ComponentViewSection extends Struct.ComponentSchema {
  collectionName: 'components_component_view_sections';
  info: {
    description: '';
    displayName: 'Manage Appearance';
  };
  attributes: {
    orderInFeaturedList: Schema.Attribute.Decimal &
      Schema.Attribute.DefaultTo<1999>;
    orderInMasterList: Schema.Attribute.Decimal &
      Schema.Attribute.DefaultTo<1999>;
    showInFeaturedList: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    showingFooter: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    showingHeader: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    viewingMode: Schema.Attribute.Enumeration<['Details Page', 'Popup']>;
  };
}

export interface ComponentWallOfFameSection extends Struct.ComponentSchema {
  collectionName: 'components_component_wall_of_fame_sections';
  info: {
    displayName: 'Wall of Fame Section';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface ComponentWhyChooseHomeServices extends Struct.ComponentSchema {
  collectionName: 'components_component_why_choose_home_services';
  info: {
    displayName: 'Why Choose Home Services';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images'>;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'component.blog-section': ComponentBlogSection;
      'component.condition-and-treatment-section': ComponentConditionAndTreatmentSection;
      'component.contact-field': ComponentContactField;
      'component.contact-info': ComponentContactInfo;
      'component.content-card': ComponentContentCard;
      'component.content-card-repeater': ComponentContentCardRepeater;
      'component.content-only': ComponentContentOnly;
      'component.course-list-section': ComponentCourseListSection;
      'component.course-section': ComponentCourseSection;
      'component.doctor-talk': ComponentDoctorTalk;
      'component.expert-section': ComponentExpertSection;
      'component.fa-qdata': ComponentFaQdata;
      'component.faq-section': ComponentFaqSection;
      'component.file-download': ComponentFileDownload;
      'component.health-package-section': ComponentHealthPackageSection;
      'component.highlight-button-item': ComponentHighlightButtonItem;
      'component.highlight-button-section': ComponentHighlightButtonSection;
      'component.highlight-card': ComponentHighlightCard;
      'component.home-service-section': ComponentHomeServiceSection;
      'component.hospital-section': ComponentHospitalSection;
      'component.hospitals-section': ComponentHospitalsSection;
      'component.journal': ComponentJournal;
      'component.journal-item': ComponentJournalItem;
      'component.logo-item': ComponentLogoItem;
      'component.logo-section': ComponentLogoSection;
      'component.media-and-events-section': ComponentMediaAndEventsSection;
      'component.media-coverage': ComponentMediaCoverage;
      'component.meet-our-expert-section': ComponentMeetOurExpertSection;
      'component.meta-section': ComponentMetaSection;
      'component.milestone-item': ComponentMilestoneItem;
      'component.milestone-section': ComponentMilestoneSection;
      'component.minimal-appearance': ComponentMinimalAppearance;
      'component.overview-with-image': ComponentOverviewWithImage;
      'component.overview-with-rich-editor': ComponentOverviewWithRichEditor;
      'component.overview-without-image': ComponentOverviewWithoutImage;
      'component.page-banner': ComponentPageBanner;
      'component.page-banner-section': ComponentPageBannerSection;
      'component.page-title': ComponentPageTitle;
      'component.social-media-updates': ComponentSocialMediaUpdates;
      'component.socomer': ComponentSocomer;
      'component.socomer-item': ComponentSocomerItem;
      'component.speaker-item': ComponentSpeakerItem;
      'component.speaker-section': ComponentSpeakerSection;
      'component.speciality-section': ComponentSpecialitySection;
      'component.testimonial-section': ComponentTestimonialSection;
      'component.title-only': ComponentTitleOnly;
      'component.usp-s-section': ComponentUspSSection;
      'component.usp-section': ComponentUspSection;
      'component.view-section': ComponentViewSection;
      'component.wall-of-fame-section': ComponentWallOfFameSection;
      'component.why-choose-home-services': ComponentWhyChooseHomeServices;
    }
  }
}
