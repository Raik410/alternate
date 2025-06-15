import createFetchClient from 'openapi-fetch'
import createClient from 'openapi-react-query'
import type { paths } from '@/shared/api/model/generated.ts'
import { CONFIG } from '../model'

export const fetchClient = createFetchClient<paths>({
  baseUrl: CONFIG.API_BASE_URL,
})

export const rqClient = createClient(fetchClient)
