import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://xedepqtbxdmvqbsbsrrd.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhlZGVwcXRieGRtdnFic2JzcnJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI4ODYwMDIsImV4cCI6MjAxODQ2MjAwMn0.p-nPSswWTC04-p5yHWlHUYW857Ce8SD-BOpeGKcWaac')