from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser  # 👈 FIX 1
from django.core.mail import send_mail
from django.conf import settings
import re

# In-memory storage
contact_submissions = []

class ContactView(APIView):
    parser_classes = [MultiPartParser, FormParser]  # 👈 FIX 2: Handle FormData

    def post(self, request):
        print("Raw data:", request.data)  # 👈 Debug log
        
        name = request.data.get("name", "").strip()
        email = request.data.get("email", "").strip()
        message = request.data.get("message", "").strip()

        # Validation
        if not all([name, email, message]):
            return Response(
                {"error": "All fields are required"}, 
                status=status.HTTP_400_BAD_REQUEST
            )

        if not re.match(r"[^@]+@[^@]+\.[^@]+", email):
            return Response(
                {"error": "Invalid email format"}, 
                status=status.HTTP_400_BAD_REQUEST
            )

        if len(message) < 10:
            return Response(
                {"error": "Message too short"}, 
                status=status.HTTP_400_BAD_REQUEST
            )

        # Store submission
        submission = {
            "name": name,
            "email": email,
            "message": message,
            "timestamp": "2026-02-13",
        }
        contact_submissions.append(submission)
        print(f"✅ Contact saved: {name} ({email})")  # 👈 Debug log

        return Response(
            {"success": True, "message": "Thank you! Your message has been sent."},
            status=status.HTTP_200_OK,
        )
