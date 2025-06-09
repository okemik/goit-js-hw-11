const API_KEY = '50752157-0e570532136d69fa984569dbb'; // Buraya kendi API anahtarını yaz

export async function fetchImages(query) {
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
    query
  )}&image_type=photo&orientation=horizontal&safesearch=true`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('API isteği başarısız oldu');
  }

  const data = await res.json();
  return data.hits;
}
