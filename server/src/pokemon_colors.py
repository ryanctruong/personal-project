# pylint: disable-all

import requests
from io import BytesIO
from PIL import Image
import numpy as np
from sklearn.cluster import KMeans

def get_pokemon_colors(pokemon_id, shiny):
    """
    Fetches either the shiny or regular official artwork for the given Pokémon ID,
    finds the 2 most dominant colors, and returns them as hex strings.
    """
    url = f"https://pokeapi.co/api/v2/pokemon/{pokemon_id}/"
    resp = requests.get(url)
    resp.raise_for_status()
    data = resp.json()

    base_name = data.get("name", "").capitalize()

    used_shiny = False
    if shiny:
        img_url = data.get("sprites", {}).get("front_shiny")
        if img_url:
            used_shiny = True
        else:
            img_url = data.get("sprites", {}).get("other", {}) \
                          .get("official-artwork", {}).get("front_default")
    else:
        img_url = data.get("sprites", {}).get("other", {}) \
                      .get("official-artwork", {}).get("front_default")

    if not img_url:
        raise ValueError(f"No sprite found for Pokémon #{pokemon_id}")

    name = f"Shiny {base_name}" if used_shiny else base_name

    img_resp = requests.get(img_url)
    img_resp.raise_for_status()
    img = Image.open(BytesIO(img_resp.content)).convert("RGBA")

    arr = np.array(img)
    alpha = arr[..., 3]
    rgb = arr[..., :3]
    pixels = rgb[alpha > 0]

    kmeans = KMeans(n_clusters=2, random_state=0)
    kmeans.fit(pixels)
    centers = kmeans.cluster_centers_.astype(int)

    hex_colors = [f"#{r:02x}{g:02x}{b:02x}" for r, g, b in centers]

    return name, hex_colors, img_url