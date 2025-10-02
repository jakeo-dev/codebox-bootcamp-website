import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  "https://optnwphcyxlvurpzybbg.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9wdG53cGhjeXhsdnVycHp5YmJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkxNTYxMDgsImV4cCI6MjA3NDczMjEwOH0.6p-Q9l4o0z9t_AcveUJs1CmXX3InjbM-VnspNy4enQY"
)

export default supabase