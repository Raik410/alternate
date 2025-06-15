import type { paths, components } from '@/shared/api/model/generated.ts'

export type ApiPaths = paths
export type ApiSchemas = components['schemas']

export {
  Search,
  PeopleAdd,
  PeoplesAdd,
  Plus,
  Phone,
  Camera,
  Comment,
  Close,
  Ellipsis,
  IconBase,
  Input,
  Button,
} from './ui'

export { ControlledInput } from './ui-controlled'

export { validationMessage } from './validation'
