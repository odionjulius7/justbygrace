export interface TimelineEvent {
  year: string
  title: string
  description: string
  image?: string
  tag?: string
}

export interface WeddingEvent {
  id: string
  title: string
  time: string
  location: string
  address: string
  description: string
  icon: string
  mapLink: string
}

export interface RSVPFormData {
  fullName: string
  email: string
  attending: 'both' | 'traditional' | 'white' | 'no' | ''
  guestCount: number
  dietaryRestrictions: string
  message: string
}

export interface GalleryItem {
  id: string
  title: string
  caption: string
  imageUrl: string
  aspect: 'portrait' | 'landscape' | 'square'
}
