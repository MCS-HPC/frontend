import { apiRequest } from './api'

export type CreditDetails = {
  balance: number
}

export function getMyCredits() {
  return apiRequest<CreditDetails>('/api/me/credit');
}
