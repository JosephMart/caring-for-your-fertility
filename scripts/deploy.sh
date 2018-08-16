#!/usr/bin/env bash

ssh -t r0 rm -rf /var/www/caringforyourfertility.com/html/*
scp -r build/* r0:/var/www/caringforyourfertility.com/html
