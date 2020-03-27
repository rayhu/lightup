// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict'

let lightSwitch = document.getElementById('onoffswitch')
console.log('On Off')
chrome.storage.sync.get('color', function(data) {
  lightSwitch.style.backgroundColor = data.color
  lightSwitch.setAttribute('value', data.color)
})

function toggleEnabledDisabled() {
  alert('Test')
  console.log('Switched')
}
