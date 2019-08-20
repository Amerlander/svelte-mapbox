'use strict'

import Map from './Map.svelte'
import Geocoder from './Geocoder.svelte'
import { contextKey, mapbox } from './mapbox.js'
import GeolocateControl from './controls/GeolocateControl.svelte'
import NavigationControl from './controls/NavigationControl.svelte'
import ScalingControl from './controls/ScalingControl.svelte'

const controls = {
  GeolocateControl,
  NavigationControl,
  ScalingControl
}

export {
  mapbox,
  Map,
  Geocoder,
  contextKey,
  controls
}
