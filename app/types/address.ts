export interface Address {
  id: string
  fullAddress: string
  city: string
  state: string
  pincode: string
  landmark?: string
  lat: number
  lng: number
  label: "Home" | "Work" | "Other"
  isDefault: boolean
  createdAt: string
}
