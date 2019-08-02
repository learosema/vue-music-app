import { clientId } from '../../soundcloud.config';

export const resolve = async url => {
  const response = await fetch(
    `https://api.soundcloud.com/resolve?url=${encodeURIComponent(
      url
    )}&client_id=${clientId}`
  );
  return await response.json();
};

export const largerPic = url =>
  (url || "").replace(/large\.jpg/, "t500x500.jpg");
