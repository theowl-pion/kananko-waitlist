-- Create waitlist table
CREATE TABLE waitlist (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  route TEXT NOT NULL,
  company_name TEXT,
  is_incorporated BOOLEAN DEFAULT FALSE,
  
  -- Add constraint to enforce email format
  CONSTRAINT valid_email CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);

-- Create index for faster email lookups
CREATE INDEX waitlist_email_idx ON waitlist (email);

-- Create a secure RLS policy that allows inserts but restricts other operations
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (for the public form)
CREATE POLICY "Allow anonymous inserts" ON waitlist
  FOR INSERT 
  TO anon
  WITH CHECK (true);

-- Only allow admins to view, update, or delete records
CREATE POLICY "Allow admins full access" ON waitlist
  USING (auth.role() = 'authenticated');

-- Comment on the table and columns for better documentation
COMMENT ON TABLE waitlist IS 'Table to store prospective users for the Kananko waitlist';
COMMENT ON COLUMN waitlist.name IS 'Full name of the person joining the waitlist';
COMMENT ON COLUMN waitlist.email IS 'Email address for contacting the person';
COMMENT ON COLUMN waitlist.route IS 'Preferred travel route (e.g., Cotonou → Paris)';
COMMENT ON COLUMN waitlist.company_name IS 'Optional company name if applicable';
COMMENT ON COLUMN waitlist.is_incorporated IS 'Whether the company is incorporated'; 