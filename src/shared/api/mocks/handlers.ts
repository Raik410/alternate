import { http, HttpResponse } from 'msw'
import { CONFIG } from '@/shared/configs/config.ts'

export const handlers = [
  http.get(CONFIG.API_BASE_URL + '/message', () => {
    return HttpResponse.json({ id: 'abc-123', firstName: 'John', lastName: 'Maverick' })
  }),
]
