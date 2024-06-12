from django.contrib import admin
from .models import MenuItem, MenuItem2, MenuItem3

@admin.register(MenuItem)
class MenuItemAdmin(admin.ModelAdmin):
    list_display = ('image', 'text')
    list_display_links = ('text',)
    fields = ('image', 'text')
@admin.register(MenuItem3)
class MenuItem3Admin(admin.ModelAdmin):
    list_display = ('text', 'text2')
    list_display_links = ('text', 'text2')
    fields = ('text', 'text2')
@admin.register(MenuItem2)
class MenuItem2Admin(admin.ModelAdmin):
    list_display = ('image', 'text')
    fields = ('image', 'text')
    list_display_links = ('text',)

    def save_model(self, request, obj, form, change):
        # Обрабатываем изображение, если оно было изменено.
        if 'image' in form.changed_data:
            image_file = form.cleaned_data['image']
            # Сохраняем файл, прежде чем связать его с объектом.
            obj.image.save(image_file.name, image_file, save=False)

        obj.text = form.cleaned_data['text']
        super().save_model(request, obj, form, change)