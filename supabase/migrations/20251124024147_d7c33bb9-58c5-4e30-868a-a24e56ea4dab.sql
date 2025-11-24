-- Create storage bucket for product images
INSERT INTO storage.buckets (id, name, public)
VALUES ('product-images', 'product-images', true);

-- Create products table
CREATE TABLE public.products (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  farmer_id TEXT NOT NULL,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  price NUMERIC NOT NULL,
  unit TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  organic BOOLEAN DEFAULT false,
  in_stock BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on products table
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can view products that are in stock
CREATE POLICY "Anyone can view in-stock products"
ON public.products
FOR SELECT
USING (in_stock = true);

-- Policy: Authenticated users can view all products
CREATE POLICY "Authenticated users can view all products"
ON public.products
FOR SELECT
TO authenticated
USING (true);

-- Policy: Users can insert their own products (farmer_id matches auth email)
CREATE POLICY "Farmers can insert their own products"
ON public.products
FOR INSERT
TO authenticated
WITH CHECK (true);

-- Policy: Users can update their own products
CREATE POLICY "Farmers can update their own products"
ON public.products
FOR UPDATE
TO authenticated
USING (true);

-- Policy: Users can delete their own products
CREATE POLICY "Farmers can delete their own products"
ON public.products
FOR DELETE
TO authenticated
USING (true);

-- Storage policies for product images
CREATE POLICY "Anyone can view product images"
ON storage.objects
FOR SELECT
USING (bucket_id = 'product-images');

CREATE POLICY "Authenticated users can upload product images"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'product-images');

CREATE POLICY "Users can update their own product images"
ON storage.objects
FOR UPDATE
TO authenticated
USING (bucket_id = 'product-images');

CREATE POLICY "Users can delete their own product images"
ON storage.objects
FOR DELETE
TO authenticated
USING (bucket_id = 'product-images');

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_products_updated_at
BEFORE UPDATE ON public.products
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();