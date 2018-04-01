$(document).ready(function () {
    let getData;
    let container = $('<div>');
    $.get('http://demo.edument.se/api/products', function (data, status) {
        console.log(data);
        for (let i in data) {
            let image = $('<img>');
            image.attr('src', data[i].Image);
            let namn = $('<span>');
            namn.text(data[i].Name);
            let paragraph = $('<p>');
            if(data[i].hasOwnProperty('Reviews')) {
                if(data[i].Reviews.length > 0) {
                    paragraph.text(data[i].Reviews[0].Comment);
                }
                else {
                    paragraph.text('No puppet!');
                }
            }
            container.append(namn);
            container.append(image);
            container.append(paragraph);
            $('#hej').append(container);
        }

    });
});