import { Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react'
import { SITE } from '../config/site'

/** Social / contact links rendered in the footer. */
export const SOCIALS = [
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: MessageCircle, label: 'WhatsApp', href: SITE.whatsapp },
  { icon: Youtube, label: 'YouTube', href: '#' },
]
