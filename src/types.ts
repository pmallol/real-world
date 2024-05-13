export interface EventItem {
  id: number
  category: string
  title: string
  description: string
  location: string
  date: string
  time: string
  organizer: string
}

export interface EventList {
  events: EventItem[]
}
