from rest_framework import serializers
from dj_rest_auth.registration.serializers import RegisterSerializer
from allauth.account.adapter import get_adapter
from .models import User, Profile

class CustomRegisterSerializer(RegisterSerializer):
    first_name = serializers.CharField(required=True)
    last_name = serializers.CharField(required=True)
    sex = serializers.CharField(required=False)
    phone_number = serializers.CharField(required=False)
    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'last_name', 'first_name', 'sex', 'phone_number',]

    # override get_cleaned_data of RegisterSerializer
    def get_cleaned_data(self):
        data = super().get_cleaned_data()
        data['last_name'] = self.validated_data.get('last_name', '')
        data['first_name'] = self.validated_data.get('first_name', '')
        data['sex'] = self.validated_data.get('sex', '')
        data['phone_number'] = self.validated_data.get('phone_number', '')
        
        return data

    # override save method of RegisterSerializer
    def save(self, request):
        adapter = get_adapter()
        user = adapter.new_user(request)
        self.cleaned_data = self.get_cleaned_data()
        user.last_name = self.cleaned_data.get('last_name')
        user.first_name = self.cleaned_data.get('first_name')
        user.sex = self.cleaned_data.get('sex')
        user.phone_number = self.cleaned_data.get('phone_number')
        user.save()
        adapter.save_user(request, user, self)
        
        return user    
    
class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'

    def __init__(self, *args, **kwargs):
        super(ProfileSerializer, self).__init__(*args, **kwargs)
        # 모든 CharField 인스턴스에 대해 allow_blank=True 적용
        for field in self.fields.values():
            if isinstance(field, serializers.CharField):
                field.allow_blank = True

    def validate(self, attrs):
        # 모든 CharField에 대해서 "해당 없음" 입력을 빈 문자열로 변환
        for field_name, field in self.fields.items():
            if isinstance(field, serializers.CharField) and attrs.get(field_name) == "해당 없음":
                attrs[field_name] = ""
        return attrs