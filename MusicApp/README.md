# MUSIC APP
---
## React Native ile Mobile App Patikası

---

<div align="center">
<a target="_blank" href="./SS/bodySS.gif">
<img src="./SS/bodySS.gif" width="400"  />
</a>
</div>

---

<div align="center">
<a target="_blank" href="./SS/searchSS.gif">
<img src="./SS/searchSS.gif" width="400"  />
</a>
</div>

---

<b><p>Bazı Kullanılan Componentler Ve Propertyler</p></b>
---

- FlatList
    - keyExtractor
    - data
    - renderItem
    - ItemSeparatorComponent

- TextInput
    - onChangeText

---

<p>Datalarımızı useState ile kullandık. useState kullanmamızın amacı da kullanıcının TextInput ile yaptığı etkileşime göre ekrandaki datayı filtreleyip render etmektir.</p>
<p>onChangeText propumuzdan bize dönecek olan kullanıcının input verisidir. Yakalanan veriyi json dosyamızda aratarak filter işlemi ile yeni bir data oluşturduk. Filtrelenen datamızı state'imizin fonksiyonuna vererek ekrana render ettirdik.</p>