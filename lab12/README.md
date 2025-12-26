# Lab 11: Preferences & Auth App

[cite_start]Bu proje, React Native kullanarak durum yönetimi (State Management), Context API ve yerel veri saklama (AsyncStorage) yeteneklerini gösteren çok ekranlı bir uygulamadır[cite: 2, 5].

## Öğrenci Bilgileri
* [cite_start]**Ad Soyad:** Tarık Buğra Koca [cite: 26]
* [cite_start]**Öğrenci ID:** 220408030 [cite: 27]

## Uygulama Özellikleri
* [cite_start]**Giriş/Çıkış Akışı:** Sahte (mock) kimlik doğrulama sistemi[cite: 33].
* [cite_start]**Kalıcı Oturum:** Kullanıcı giriş bilgileri uygulama kapatılsa dahi AsyncStorage ile saklanır[cite: 34, 173].
* [cite_start]**Global Durum:** Kullanıcı verileri Context API kullanılarak tüm ekranlara dağıtılır[cite: 11, 35].
* [cite_start]**Tema Tercihi:** Açık/Koyu tema seçeneği özel bir hook (`useTheme`) üzerinden yönetilir ve kalıcıdır[cite: 36, 197].

## Kullanılan Teknolojiler
* [cite_start]**Framework:** Expo (React Native)[cite: 17, 49].
* [cite_start]**Navigasyon:** React Navigation (Native Stack)[cite: 19, 53].
* [cite_start]**Depolama:** AsyncStorage[cite: 54].
* [cite_start]**Durum Yönetimi:** Context API, useState, useEffect ve Custom Hooks[cite: 9, 10, 11, 13].

## Kurulum ve Çalıştırma
[cite_start]Projeyi yerel makinenizde çalıştırmak için[cite: 28]:

1. **Bağımlılıkları Yükleyin:**
   ```bash
   npm install