from django.urls import include, path
from .views import AdminCreateView, AdminDeleteView, AdminLoginAPIView, UserAPIView, LoginAPIView

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('users/', UserAPIView.as_view()),
    path('login/', LoginAPIView.as_view()),
    path('loginAdmin/', AdminLoginAPIView.as_view()),
    path('createAdmin/', AdminCreateView.as_view()),
    path('deleteUser/', AdminDeleteView.as_view())
]
