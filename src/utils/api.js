
function getImageUrl(id = '') {
  return `https://cdn-img.jamendo.com/track/s${id.slice(0, 4)}/${id}/covers/1.400.jpg`;
}

export async function getPlaylist(folder) {
  const folderUrl = '/media/' + encodeURIComponent(folder) + '/';
  
  const response = await fetch(folder + 'playlist.m3u');
  const text = await response.text();
  const playList = data.split(/(\r|)\n/).map(line => {
    const fileName = line.trim();
    const trackInfo = fileName.slice(0, -4).split('-');

    return {
      id: trackInfo[0],
      artist: trackInfo[2],
      title: trackInfo[3],
      trackUrl: folderUrl + fileName,
      imageUrl: getImageUrl()
    }
  });
  return data;
}

