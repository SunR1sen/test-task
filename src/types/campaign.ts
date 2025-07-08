export type CampaignStatus = 'active' | 'paused' | 'warning';

export type CampaignLanguage = 'en' | 'es' | 'de';

export interface Campaign {
  id: string;
  name: string;
  status: CampaignStatus;
  language: CampaignLanguage;
  tags: CampaignTag[];
}

export type CampaignTag = 'gambling' | 'investments' | 'adults' | 'risky';

export interface CreateCampaignData {
  name: string;
  status: CampaignStatus;
  language: CampaignLanguage;
  tags: CampaignTag[];
}

export interface CampaignsFilter {
  status?: CampaignStatus | 'all';
} 