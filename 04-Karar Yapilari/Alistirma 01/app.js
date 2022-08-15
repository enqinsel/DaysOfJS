// ogrenci vize-final not hesaplama ornegi yapalim:

    // Sartlar:
    // Öğrencinin vize notunun %30'unu final notunun %70'ini alalım.
    // Vize ve final notunun toplamından doğan not ortalaması eğer 0-30 aralığındaysa KALDINIZ (FF) yazdıralım.
    // 31-49 aralığındaysa DC - KOŞULLU yazdıralım.
    // 50- 84 aralığındaysa CC - GEÇTİNİZ! yazdıralım.
    // 85-100 aralığındaysa Notunuz AA yazdıralım.

    let vize = prompt("Vize notunuzu giriniz: ")
    let final = prompt("Final notunuzu giriniz: ")
    
    let ortalama; 
    
    ortalama = (vize*30)/100 + (final*70)/100
    
    if(ortalama >= 0 && ortalama <= 30){
        alert(`Ortalamaniz: ${ortalama}. KALDINIZ (FF)`)
    }
    else if(ortalama >= 31 && ortalama <= 49){
        alert(`Ortalamaniz: ${ortalama}. DC - KOŞULLU `)
    }
    else if(ortalama >= 50 && ortalama <= 84){
        alert(`Ortalamaniz: ${ortalama}. CC - GEÇTİNİZ! `)
    }else{
        alert(`Ortalamaniz: ${ortalama}. Notunuz AA `)
    }