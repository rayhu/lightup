// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict'

chrome.runtime.onInstalled.addListener(function() {
  // match the page that enable the extensions
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostEquals: 'web.telegram.org' }
          })
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
      }
    ])
  })
})

let lightOn = true
