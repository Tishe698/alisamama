from django import forms

class FeedbackForm(forms.Form):
    name = forms.CharField(
        label="Имя",
        widget=forms.TextInput(attrs={'class': 'form-control'})
    )
    phone_number = forms.CharField(
        max_length=12,
        label="Номер телефона",
        widget=forms.NumberInput(attrs={'type': 'tel', 'class': 'form-control'})
    )

    message = forms.CharField(
        label="Введите ваш вопрос",
        widget=forms.Textarea(attrs={'class': 'form-control'})
    )
    agreement = forms.BooleanField(
        label="Согласие на обработку данных",
        required=True,  # Указываем, что это поле обязательное для заполнения
    )
