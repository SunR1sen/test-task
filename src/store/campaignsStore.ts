import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Campaign, CampaignStatus, CreateCampaignData } from '../types/campaign';

// Моковые данные для начального состояния
const mockCampaigns: Campaign[] = [
  {
    id: '1',
    name: 'Summer Sale Campaign',
    status: 'active',
    budget: 5000,
    startDate: '2024-06-01',
    endDate: '2024-08-31',
    description: 'Promotional campaign for summer products'
  },
  {
    id: '2',
    name: 'Holiday Special',
    status: 'paused',
    budget: 3000,
    startDate: '2024-12-01',
    endDate: '2024-12-31',
    description: 'Christmas and New Year promotions'
  },
  {
    id: '3',
    name: 'Back to School',
    status: 'warning',
    budget: 2500,
    startDate: '2024-09-01',
    endDate: '2024-09-30',
    description: 'School supplies and educational products'
  },
  {
    id: '4',
    name: 'Black Friday',
    status: 'active',
    budget: 8000,
    startDate: '2024-11-25',
    endDate: '2024-11-30',
    description: 'Major discount event'
  },
  {
    id: '5',
    name: 'Spring Collection',
    status: 'warning',
    budget: 4000,
    startDate: '2024-03-01',
    endDate: '2024-05-31',
    description: 'New spring fashion line'
  }
];

interface CampaignsState {
  campaigns: Campaign[];
  filter: CampaignStatus | 'all';
  addCampaign: (campaign: CreateCampaignData) => void;
  deleteCampaign: (id: string) => void;
  setFilter: (filter: CampaignStatus | 'all') => void;
  getFilteredCampaigns: () => Campaign[];
}

export const useCampaignsStore = create<CampaignsState>()(
  persist(
    (set, get) => ({
      campaigns: mockCampaigns,
      filter: 'all',
      
      addCampaign: (campaignData: CreateCampaignData) => {
        const newCampaign: Campaign = {
          ...campaignData,
          id: Date.now().toString(),
        };
        
        set((state) => ({
          campaigns: [...state.campaigns, newCampaign]
        }));
      },
      
      deleteCampaign: (id: string) => {
        set((state) => ({
          campaigns: state.campaigns.filter(campaign => campaign.id !== id)
        }));
      },
      
      setFilter: (filter: CampaignStatus | 'all') => {
        set({ filter });
      },
      
      getFilteredCampaigns: () => {
        const { campaigns, filter } = get();
        if (filter === 'all') {
          return campaigns;
        }
        return campaigns.filter(campaign => campaign.status === filter);
      }
    }),
    {
      name: 'campaigns-storage',
      partialize: (state) => ({ campaigns: state.campaigns }),
    }
  )
); 